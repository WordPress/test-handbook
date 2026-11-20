/**
 * validate-manifest.mjs
 *
 * Checks that bin/handbook-manifest.json and the Markdown files in the
 * repository match, so the handbook sync does not miss or break pages.
 *
 * Usage (from the repository root):
 *   node .github/scripts/validate-manifest.mjs
 *
 * Only files tracked by git are checked, so `git add` new pages first.
 * Exits with code 1 when an error is found. Warnings do not fail the run.
 *
 * Requirements: Node.js 18+
 */

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve( dirname( fileURLToPath( import.meta.url ) ), '../..' );
const MANIFEST_PATH = 'bin/handbook-manifest.json';
const SOURCE_PREFIX = 'https://github.com/WordPress/test-handbook/blob/trunk/';
// Markdown files that are not handbook pages.
const IGNORED_FILES = new Set( [ 'README.md' ] );
const IGNORED_DIRS = [ '.github/', 'node_modules/' ];
// Slugs that sanitize_title_with_dashes() keeps unchanged, so the importer accepts them.
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Turn a Markdown file path into its manifest key.
 * @param {string} file Path relative to the repository root.
 * @returns {string}
 */
export function fileToKey( file ) {
	const key = file.replace( /\.md$/, '' );
	if ( key === 'index' ) {
		return key;
	}
	return key.replace( /\/index$/, '' );
}

/**
 * List tracked Markdown files that should be handbook pages.
 * @returns {string[]}
 */
function listPages() {
	const output = execFileSync( 'git', [ 'ls-files', '-z', '--', '*.md' ], {
		cwd: ROOT,
		encoding: 'utf8',
	} );

	return output
		.split( '\0' )
		.filter( Boolean )
		.filter( ( file ) => ! IGNORED_FILES.has( file ) )
		.filter( ( file ) => ! IGNORED_DIRS.some( ( dir ) => file.startsWith( dir ) ) );
}

/**
 * Validate a parsed manifest against the list of page files.
 * @param {Record<string, object>} manifest
 * @param {string[]} pages
 * @param {(file: string) => boolean} fileExists
 * @returns {{errors: string[], warnings: string[]}}
 */
export function validate( manifest, pages, fileExists ) {
	const result = { errors: [], warnings: [] };
	const keys = Object.keys( manifest );
	const slugs = new Set( keys.map( ( key ) => manifest[ key ]?.slug ) );

	const pageForKey = new Map();
	for ( const file of pages ) {
		const key = fileToKey( file );
		if ( pageForKey.has( key ) ) {
			result.errors.push( `${ pageForKey.get( key ) } and ${ file } both use the key "${ key }". Remove or rename one of them.` );
			continue;
		}
		pageForKey.set( key, file );
		if ( ! manifest[ key ] ) {
			result.errors.push( `${ file } has no entry in ${ MANIFEST_PATH } (expected key "${ key }").` );
		}
	}

	for ( const key of keys ) {
		const entry = manifest[ key ];
		if ( ! entry || typeof entry !== 'object' ) {
			result.errors.push( `"${ key }" must be an object.` );
			continue;
		}

		for ( const field of [ 'title', 'slug', 'markdown_source' ] ) {
			if ( typeof entry[ field ] !== 'string' || entry[ field ] === '' ) {
				result.errors.push( `"${ key }" needs a non-empty "${ field }" string.` );
			}
		}
		if ( entry.parent !== null && typeof entry.parent !== 'string' ) {
			result.errors.push( `"${ key }" needs "parent" set to a manifest key or null.` );
		}
		if ( 'order' in entry && typeof entry.order !== 'number' ) {
			result.errors.push( `"${ key }" has an "order" that is not a number.` );
		}

		if ( typeof entry.slug === 'string' ) {
			if ( ! SLUG_PATTERN.test( entry.slug ) ) {
				result.errors.push( `"${ key }" has slug "${ entry.slug }". Use lowercase letters and numbers, with single dashes between words.` );
			}
			// The root page is the only one whose slug is not the last part of its key.
			if ( key !== 'index' && entry.slug !== key.split( '/' ).pop() ) {
				result.errors.push( `"${ key }" has slug "${ entry.slug }", but the slug must match the last part of the key.` );
			}
		}

		if ( typeof entry.markdown_source === 'string' ) {
			if ( ! entry.markdown_source.startsWith( SOURCE_PREFIX ) ) {
				result.errors.push( `"${ key }" markdown_source must start with ${ SOURCE_PREFIX }` );
			} else {
				const file = entry.markdown_source.slice( SOURCE_PREFIX.length );
				if ( ! fileExists( file ) ) {
					result.errors.push( `"${ key }" points to ${ file }, which does not exist.` );
				} else if ( fileToKey( file ) !== key ) {
					result.errors.push( `"${ key }" points to ${ file }, but that file needs the key "${ fileToKey( file ) }".` );
				}
			}
		}

		if ( typeof entry.parent === 'string' && ! manifest[ entry.parent ] ) {
			if ( slugs.has( entry.parent ) ) {
				// The importer finds a parent by slug only when that page already exists on the handbook.
				result.warnings.push( `"${ key }" uses the slug "${ entry.parent }" as parent. Use the full manifest key instead.` );
			} else {
				result.errors.push( `"${ key }" has parent "${ entry.parent }", which is not a manifest key.` );
			}
		}
	}

	// The importer creates parents first, so a loop of parents stops the whole sync.
	for ( const key of keys ) {
		const seen = new Set( [ key ] );
		let parent = manifest[ key ]?.parent;
		while ( typeof parent === 'string' && manifest[ parent ] ) {
			if ( seen.has( parent ) ) {
				result.errors.push( `"${ key }" has a parent loop through "${ parent }".` );
				break;
			}
			seen.add( parent );
			parent = manifest[ parent ].parent;
		}
	}

	return result;
}

function main() {
	let manifest;
	try {
		manifest = JSON.parse( readFileSync( join( ROOT, MANIFEST_PATH ), 'utf8' ) );
	} catch ( error ) {
		console.error( `Error: could not read ${ MANIFEST_PATH }: ${ error.message }` );
		process.exit( 1 );
	}

	if ( ! manifest || typeof manifest !== 'object' || Array.isArray( manifest ) ) {
		console.error( `Error: ${ MANIFEST_PATH } must contain a JSON object.` );
		process.exit( 1 );
	}

	const pages = listPages();
	const { errors, warnings } = validate( manifest, pages, ( file ) => existsSync( join( ROOT, file ) ) );

	for ( const message of warnings ) {
		console.warn( `Warning: ${ message }` );
	}
	for ( const message of errors ) {
		console.error( `Error: ${ message }` );
	}

	if ( errors.length ) {
		console.error( `\n${ errors.length } error(s) found in ${ MANIFEST_PATH }.` );
		process.exit( 1 );
	}

	console.log( `${ MANIFEST_PATH } is valid: ${ Object.keys( manifest ).length } entries, ${ pages.length } pages.` );
}

if ( process.argv[ 1 ] && resolve( process.argv[ 1 ] ) === fileURLToPath( import.meta.url ) ) {
	main();
}
