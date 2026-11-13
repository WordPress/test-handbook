/**
 * weekly-testing-digest.mjs
 *
 * Collects open "Needs Testing" counts from Gutenberg (GitHub) and
 * WordPress Trac, then builds a JSON payload for Slack.
 *
 * Usage:
 *   node weekly-testing-digest.mjs                           # dry-run: prints payload
 *   SLACK_WEBHOOK_URL=<url> node weekly-testing-digest.mjs   # posts to Slack
 *
 * Requirements: Node.js 18+ (native fetch)
 */

const REPO = 'WordPress/gutenberg';
const LABEL = 'Needs Testing';
const TRAC_QUERY_URL =
	'https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing&group=milestone&col=id&col=summary&col=status&col=owner&col=type&col=priority&col=milestone&order=priority&max=0';
const TRAC_MCP_URL =
	'https://wordpress-trac-mcp-server-prod.a8c-aiops.workers.dev/mcp';
// Same filters as TRAC_QUERY_URL, sorted by ID so tickets don't move between pages.
const TRAC_SEARCH_QUERY =
	'status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords~=needs-testing&order=id';
// Stops paging if the server keeps reporting more results (50 tickets a page).
const TRAC_MAX_PAGES = 40;
const USER_AGENT =
	'WordPress-test-handbook-weekly-testing-digest (+https://github.com/WordPress/test-handbook)';

// ---------------------------------------------------------------------------
// GitHub
// ---------------------------------------------------------------------------

/**
 * Query GitHub Search API for open items with the "Needs Testing" label.
 * @param {'issue'|'pr'} type
 * @returns {Promise<number>}
 */
async function fetchGitHubCount( type ) {
	const q = `repo:${ REPO } label:"${ LABEL }" state:open is:${ type }`;
	const url = `https://api.github.com/search/issues?q=${ encodeURIComponent( q ) }`;

	const headers = { Accept: 'application/vnd.github+json' };
	if ( process.env.GITHUB_TOKEN ) {
		headers.Authorization = `Bearer ${ process.env.GITHUB_TOKEN }`;
	}

	const res = await fetch( url, { headers } );
	if ( ! res.ok ) {
		throw new Error(
			`GitHub API returned ${ res.status } for ${ type }: ${ await res.text() }`
		);
	}

	const data = await res.json();
	return data.total_count;
}

/**
 * Build the GitHub web UI filtered URL.
 *
 * The `is:pr` qualifier is required on `/pulls` because the URL otherwise
 * redirects to the unified issues view.
 *
 * @param {'issues'|'pulls'} type
 * @returns {string}
 */
function buildGitHubURL( type ) {
	const encodedLabel = encodeURIComponent( `"${ LABEL }"` );
	const typeQualifier = type === 'pulls' ? '+is%3Apr' : '+is%3Aissue';
	return `https://github.com/${ REPO }/${ type }?q=is%3Aopen${ typeQualifier }+label%3A${ encodedLabel }`;
}

// ---------------------------------------------------------------------------
// Trac
// ---------------------------------------------------------------------------

/**
 * Call a tool on the WordPress Trac MCP server and return its parsed result.
 *
 * Trac answers automated requests with a browser challenge, so the counts come
 * from the read-only WordPress Trac MCP server instead.
 *
 * @see https://github.com/WordPress/trac-mcp
 *
 * @param {string} name Tool name.
 * @param {object} args Tool arguments.
 * @returns {Promise<object>}
 * @throws {Error} If the request fails or the tool returns an error.
 */
async function callTracTool( name, args ) {
	const res = await fetch( TRAC_MCP_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/event-stream',
			// Cloudflare rejects some default user agents, so name this client.
			'User-Agent': USER_AGENT,
		},
		body: JSON.stringify( {
			jsonrpc: '2.0',
			id: 1,
			method: 'tools/call',
			params: { name, arguments: args },
		} ),
		signal: AbortSignal.timeout( 60000 ),
	} );

	const body = await res.text();
	if ( ! res.ok ) {
		throw new Error(
			`Trac MCP server returned HTTP ${ res.status }: ${ body.slice( 0, 200 ) }`
		);
	}

	// The server can answer with plain JSON or a server-sent event stream.
	const json = res.headers.get( 'content-type' )?.includes( 'text/event-stream' )
		? body
				.split( '\n' )
				.filter( ( line ) => line.startsWith( 'data:' ) )
				.map( ( line ) => line.slice( 5 ).trim() )
				.pop()
		: body;
	const message = JSON.parse( json ?? '' );

	if ( message.error ) {
		throw new Error( `Trac MCP error: ${ message.error.message }` );
	}

	const text = message.result?.content?.[ 0 ]?.text ?? '';
	if ( message.result?.isError ) {
		throw new Error( `${ name } failed: ${ text.slice( 0, 200 ) }` );
	}

	return JSON.parse( text );
}

/**
 * Count open "needs-testing" Trac tickets per milestone.
 *
 * Pages through `searchTickets` with the same filters as TRAC_QUERY_URL.
 *
 * @returns {Promise<Array<{milestone: string, count: number}>>}
 *          Only versioned milestones (X.Y or X.Y.Z), oldest version first.
 * @throws {Error} If a request fails.
 */
async function fetchTracMilestones() {
	const tickets = new Map();
	let totalFound = 0;

	for ( let page = 1; page <= TRAC_MAX_PAGES; page++ ) {
		const result = await callTracTool( 'searchTickets', {
			query: TRAC_SEARCH_QUERY,
			limit: 50,
			page,
		} );

		for ( const ticket of result.results ?? [] ) {
			tickets.set( ticket.id, ticket.metadata?.milestone ?? '' );
		}
		totalFound = result.totalFound;

		if ( ! result.hasMore ) {
			break;
		}
	}

	if ( tickets.size !== totalFound ) {
		console.error(
			`::warning::Trac reported ${ totalFound } ticket(s) but ${ tickets.size } were read.`
		);
	}

	const counts = new Map();
	for ( const milestone of tickets.values() ) {
		counts.set( milestone, ( counts.get( milestone ) ?? 0 ) + 1 );
	}

	// Keep only versioned milestones (e.g. "7.0", "7.0.1", "7.1")
	const versioned = [ ...counts ]
		.filter( ( [ milestone ] ) => /^\d+(\.\d+)+$/.test( milestone ) )
		.map( ( [ milestone, count ] ) => ( { milestone, count } ) )
		.sort( ( a, b ) =>
			a.milestone.localeCompare( b.milestone, 'en', { numeric: true } )
		);

	if ( versioned.length === 0 && tickets.size > 0 ) {
		console.error(
			`Warning: Found ${ tickets.size } ticket(s) but none in a versioned milestone (X.Y or X.Y.Z).`
		);
	}

	return versioned;
}

// ---------------------------------------------------------------------------
// Slack
// ---------------------------------------------------------------------------

/**
 * Post JSON payload to a Slack Workflow webhook.
 * @param {string} webhookURL
 * @param {object} payload
 */
async function postToSlack( webhookURL, payload ) {
	const res = await fetch( webhookURL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify( payload ),
	} );

	if ( ! res.ok ) {
		throw new Error(
			`Slack webhook returned ${ res.status }: ${ await res.text() }`
		);
	}

	console.error( `Posted successfully (HTTP ${ res.status })` );
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
	const webhookURL = process.env.SLACK_WEBHOOK_URL || '';

	// Fetch GitHub and Trac data in parallel
	console.error( 'Fetching data from GitHub and Trac...' );

	const [ issueCount, prCount, tracMilestones ] = await Promise.all( [
		fetchGitHubCount( 'issue' ),
		fetchGitHubCount( 'pr' ),
		// Still post the Gutenberg counts when Trac can't be reached.
		fetchTracMilestones().catch( ( err ) => {
			console.error(
				`::warning::Could not fetch Trac data: ${ err.message.split( '\n' )[ 0 ] }`
			);
			return null;
		} ),
	] );

	const gutenbergTotal = issueCount + prCount;
	const tracTotal = tracMilestones
		? String( tracMilestones.reduce( ( sum, m ) => sum + m.count, 0 ) )
		: 'N/A';
	const date = new Date().toISOString().split( 'T' )[ 0 ];

	// Slack Workflow webhook variables only accept primitives, so flatten
	// the per-milestone breakdown into a string (e.g. "7.0: 2 • 7.1: 8").
	const tracMilestonesSummary = tracMilestones
		? tracMilestones
				.map( ( m ) => `${ m.milestone }: ${ m.count }` )
				.join( ' • ' )
		: 'Trac data unavailable this week';

	const payload = {
		gutenberg_issue_count: String( issueCount ),
		gutenberg_pr_count: String( prCount ),
		gutenberg_total: String( gutenbergTotal ),
		trac_milestones: tracMilestonesSummary,
		trac_total: tracTotal,
		gutenberg_issues_url: buildGitHubURL( 'issues' ),
		gutenberg_prs_url: buildGitHubURL( 'pulls' ),
		trac_url: TRAC_QUERY_URL,
		date,
	};

	if ( ! webhookURL ) {
		// Human-readable summary
		console.error( '' );
		console.error( '=== Weekly Testing Digest ===' );
		console.error( `Date: ${ date }` );
		console.error( '' );
		console.error(
			`Gutenberg: ${ gutenbergTotal } open (${ issueCount } issues, ${ prCount } PRs)`
		);
		console.error( '' );
		if ( tracMilestones ) {
			console.error(
				`Trac: ${ tracTotal } tickets in versioned milestones`
			);
			for ( const m of tracMilestones ) {
				console.error( `  ${ m.milestone }: ${ m.count } tickets` );
			}
		} else {
			console.error( `Trac: ${ tracMilestonesSummary }` );
		}
		console.error( '' );
		console.error( '=== JSON payload ===' );
		console.log( JSON.stringify( payload, null, 2 ) );
	} else {
		await postToSlack( webhookURL, payload );
	}
}

main().catch( ( err ) => {
	console.error( `Error: ${ err.message }` );
	process.exit( 1 );
} );
