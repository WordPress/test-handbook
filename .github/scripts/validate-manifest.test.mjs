/**
 * Tests for validate-manifest.mjs.
 *
 * Usage (from the repository root):
 *   node --test .github/scripts/*.test.mjs
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';

import { fileToKey, validate } from './validate-manifest.mjs';

const SOURCE = 'https://github.com/WordPress/test-handbook/blob/trunk/';

function entry( file, slug, parent = null ) {
	return { title: slug, slug, markdown_source: SOURCE + file, parent, order: 1 };
}

const files = [ 'index.md', 'guides/index.md', 'guides/setup.md' ];
const exists = ( file ) => files.includes( file );

function validManifest() {
	return {
		index: entry( 'index.md', 'handbook' ),
		guides: entry( 'guides/index.md', 'guides' ),
		'guides/setup': entry( 'guides/setup.md', 'setup', 'guides' ),
	};
}

test( 'fileToKey maps files to manifest keys', () => {
	assert.equal( fileToKey( 'index.md' ), 'index' );
	assert.equal( fileToKey( 'guides/index.md' ), 'guides' );
	assert.equal( fileToKey( 'guides/setup.md' ), 'guides/setup' );
} );

test( 'a valid manifest has no errors or warnings', () => {
	assert.deepEqual( validate( validManifest(), files, exists ), { errors: [], warnings: [] } );
} );

test( 'a page without a manifest entry is an error', () => {
	const { errors } = validate( validManifest(), [ ...files, 'guides/new.md' ], exists );
	assert.equal( errors.length, 1 );
	assert.match( errors[ 0 ], /guides\/new\.md has no entry/ );
} );

test( 'an entry pointing to a missing file is an error', () => {
	const manifest = validManifest();
	manifest[ 'guides/gone' ] = entry( 'guides/gone.md', 'gone', 'guides' );
	const { errors } = validate( manifest, files, exists );
	assert.equal( errors.length, 1 );
	assert.match( errors[ 0 ], /does not exist/ );
} );

test( 'an unknown parent is an error, a slug-only parent is a warning', () => {
	const manifest = validManifest();
	manifest[ 'guides/setup' ].parent = 'missing';
	assert.match( validate( manifest, files, exists ).errors[ 0 ], /not a manifest key/ );

	manifest.guides = entry( 'guides/index.md', 'guides', 'index' );
	manifest[ 'guides/setup' ] = entry( 'guides/setup.md', 'setup', 'handbook' );
	const result = validate( manifest, files, exists );
	assert.deepEqual( result.errors, [] );
	assert.equal( result.warnings.length, 1 );
} );

test( 'slugs with extra dashes are errors', () => {
	for ( const slug of [ 'new--page', '-page', 'page-' ] ) {
		const manifest = validManifest();
		manifest[ 'guides/setup' ].slug = slug;
		assert.ok( validate( manifest, files, exists ).errors.some( ( message ) => /single dashes/.test( message ) ), slug );
	}
} );

test( 'two pages with the same key are an error', () => {
	const { errors } = validate( validManifest(), [ ...files, 'guides.md' ], ( file ) => file === 'guides.md' || exists( file ) );
	assert.equal( errors.length, 1 );
	assert.match( errors[ 0 ], /both use the key "guides"/ );
} );

test( 'parent loops are errors', () => {
	const manifest = validManifest();
	manifest.guides.parent = 'guides';
	assert.ok( validate( manifest, files, exists ).errors.some( ( message ) => /parent loop/.test( message ) ) );

	manifest.guides.parent = 'guides/setup';
	assert.ok( validate( manifest, files, exists ).errors.some( ( message ) => /parent loop/.test( message ) ) );
} );

test( 'bad slugs and missing fields are errors', () => {
	const manifest = validManifest();
	manifest[ 'guides/setup' ].slug = 'Setup';
	delete manifest.guides.title;
	const { errors } = validate( manifest, files, exists );
	assert.ok( errors.some( ( message ) => /lowercase/.test( message ) ) );
	assert.ok( errors.some( ( message ) => /"title"/.test( message ) ) );
} );
