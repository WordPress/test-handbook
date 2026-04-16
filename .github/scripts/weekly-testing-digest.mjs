/**
 * weekly-testing-digest.mjs
 *
 * Collects open "Needs Testing" counts from Gutenberg (GitHub) and
 * WordPress Trac, then builds a JSON payload for Slack.
 *
 * Usage:
 *   node weekly-testing-digest.mjs                  # dry-run: prints payload
 *   node weekly-testing-digest.mjs --post <URL>     # posts payload to webhook
 *
 * Requirements: Node.js 18+ (native fetch), playwright
 */

import { chromium } from 'playwright';

const REPO = 'WordPress/gutenberg';
const LABEL = 'Needs Testing';
const TRAC_QUERY_URL =
	'https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing&group=milestone&col=id&col=summary&col=status&col=owner&col=type&col=priority&col=milestone&order=priority&max=0';
const TRAC_REPORT_URL = 'https://core.trac.wordpress.org/tickets/needs-testing';

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
 * @param {'issues'|'pulls'} type
 * @returns {string}
 */
function buildGitHubURL( type ) {
	const encodedLabel = encodeURIComponent( `"${ LABEL }"` );
	return `https://github.com/${ REPO }/${ type }?q=is%3Aopen+label%3A${ encodedLabel }`;
}

// ---------------------------------------------------------------------------
// Trac
// ---------------------------------------------------------------------------

/**
 * Scrape Trac "needs-testing" query grouped by milestone.
 * Trac blocks automated requests with a hashcash browser challenge,
 * so we use a headless browser that auto-solves it.
 *
 * @returns {Promise<Array<{milestone: string, count: number}>>}
 *          Only versioned milestones (X.X pattern).
 */
async function fetchTracMilestones() {
	const browser = await chromium.launch();
	try {
		const page = await browser.newPage();
		await page.goto( TRAC_QUERY_URL, { timeout: 45000 } );
		await page.waitForSelector( 'table.listing', { timeout: 30000 } );

		const allMilestones = await page.evaluate( () => {
			return [ ...document.querySelectorAll( 'h2' ) ]
				.map( ( h ) => {
					const match = h.textContent
						.trim()
						.match( /Milestone:\s*(.+?)\s*\((\d+)\s*match/ );
					return match
						? { milestone: match[ 1 ], count: parseInt( match[ 2 ] ) }
						: null;
				} )
				.filter( Boolean );
		} );

		// Keep only versioned milestones (e.g. "7.0", "7.1")
		return allMilestones.filter( ( m ) => /^\d+\.\d+$/.test( m.milestone ) );
	} finally {
		await browser.close();
	}
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
	const args = process.argv.slice( 2 );
	let mode = 'dry-run';
	let webhookURL = '';

	for ( let i = 0; i < args.length; i++ ) {
		if ( args[ i ] === '--post' ) {
			mode = 'post';
			webhookURL = args[ i + 1 ];
			if ( ! webhookURL ) {
				console.error( 'Error: --post requires a webhook URL argument.' );
				process.exit( 1 );
			}
			i++;
		} else if ( args[ i ] === '--help' || args[ i ] === '-h' ) {
			console.log(
				'Usage: node weekly-testing-digest.mjs [--post WEBHOOK_URL]'
			);
			console.log(
				'  (no args)       Dry-run: print JSON payload to stdout'
			);
			console.log(
				'  --post URL      Post the payload to the given Slack webhook URL'
			);
			process.exit( 0 );
		} else {
			console.error( `Unknown argument: ${ args[ i ] }` );
			process.exit( 1 );
		}
	}

	// Fetch GitHub and Trac data in parallel
	console.error( 'Fetching data from GitHub and Trac...' );

	const [ issueCount, prCount, tracMilestones ] = await Promise.all( [
		fetchGitHubCount( 'issue' ),
		fetchGitHubCount( 'pr' ),
		fetchTracMilestones(),
	] );

	const gutenbergTotal = issueCount + prCount;
	const tracTotal = tracMilestones.reduce( ( sum, m ) => sum + m.count, 0 );
	const date = new Date().toISOString().split( 'T' )[ 0 ];

	const payload = {
		gutenberg_issue_count: String( issueCount ),
		gutenberg_pr_count: String( prCount ),
		gutenberg_total: String( gutenbergTotal ),
		trac_milestones: tracMilestones,
		trac_total: String( tracTotal ),
		gutenberg_issues_url: buildGitHubURL( 'issues' ),
		gutenberg_prs_url: buildGitHubURL( 'pulls' ),
		trac_url: TRAC_REPORT_URL,
		date,
	};

	if ( mode === 'dry-run' ) {
		// Human-readable summary
		console.error( '' );
		console.error( '=== Weekly Testing Digest ===' );
		console.error( `Date: ${ date }` );
		console.error( '' );
		console.error(
			`Gutenberg: ${ gutenbergTotal } open (${ issueCount } issues, ${ prCount } PRs)`
		);
		console.error( '' );
		console.error(
			`Trac: ${ tracTotal } tickets in versioned milestones`
		);
		for ( const m of tracMilestones ) {
			console.error( `  ${ m.milestone }: ${ m.count } tickets` );
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
