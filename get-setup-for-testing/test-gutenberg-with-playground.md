# Testing Gutenberg Tickets with WordPress Playground

This guide focuses on the ticket testing workflow for Gutenberg changes using WordPress Playground. The goal is to help contributors reproduce issues, verify fixes, and report results in a consistent format.

## When to use Playground

Use Playground when a Gutenberg ticket can be tested in a browser-only WordPress environment.

Use a full local environment when testing depends on:

- Build tooling or custom scripts
- Complex server configuration
- Integration with external services
- Performance or browser automation testing

## Finding tickets to test

A great place to start is the [Needs Testing](https://github.com/WordPress/gutenberg/pulls?q=is%3Aopen+is%3Apr+label%3A%22Needs+Testing%22) queue on GitHub. These are Gutenberg PRs that need a fresh set of eyes.
## Prerequisites

Before testing, collect the following from the ticket or PR:

- Ticket/issue URL
- GitHub PR number or PR URL (Gutenberg fixes ship as PRs; patch URLs are for WordPress Trac tickets, not Gutenberg issues)
- Exact reproduction steps
- Expected behavior
- Any required preconditions (theme, post type, specific block settings, user role)

Then open Playground: https://playground.wordpress.net/

## Test a Gutenberg PR in Playground

You can test a Gutenberg pull request directly in Playground using the [`gutenberg-pr` query parameter](https://wordpress.github.io/wordpress-playground/developers/apis/query-api). Playground builds and loads Gutenberg from that PR so you can reproduce the issue and verify the fix without a local checkout.

Example:

https://playground.wordpress.net/?gutenberg-pr=65337

Steps:

1. Open the PR on GitHub and note the PR number (the number in the PR title URL, for example `65337` in `.../pull/65337`).
2. Add it to the Playground URL: `https://playground.wordpress.net/?gutenberg-pr=PR_NUMBER` (replace `PR_NUMBER` with the number).
3. Open the URL in your browser.
4. Wait for the environment to finish loading; Gutenberg from that PR will be active.

Then:

- Reproduce the issue using the ticket steps.
- Confirm whether the PR resolves it and run your usual regression checks.

For a clear before-and-after, reproduce the issue first in a separate Playground tab without `gutenberg-pr` (for example default site plus Gutenberg from Plugins > Add New if you need the plugin), then open a new tab with `?gutenberg-pr=PR_NUMBER` and repeat the same steps.

For more options (WordPress version, blueprints, and other query parameters), see the [Playground Query API](https://wordpress.github.io/wordpress-playground/developers/apis/query-api).

### Test against a Gutenberg branch (for example trunk)

To load a branch from the Gutenberg repository instead of a single PR, use `gutenberg-branch`. For example, to test the latest development line:

https://playground.wordpress.net/?gutenberg-branch=trunk

Use this when a ticket asks for verification against current Gutenberg rather than a specific PR.

## Test workflow

### 1) Prepare a clean test environment

1. Open WordPress Playground in a new browser tab.
2. Install and activate the Gutenberg plugin from Plugins > Add New.
3. Confirm plugin and WordPress versions if the ticket depends on specific versions.
4. Configure any required preconditions from the ticket (for example: specific theme, block settings, or content state).

### 2) Reproduce the issue on baseline

1. Follow the ticket steps exactly before applying any fix.
2. Record what happens (actual behavior) and what should happen (expected behavior).
3. If you cannot reproduce, note where behavior diverges from the ticket steps.

### 3) Apply and test the proposed fix

1. For a Gutenberg PR, open Playground with `?gutenberg-pr=PR_NUMBER` as described in [Test a Gutenberg PR in Playground](#test-a-gutenberg-pr-in-playground). For branch-based testing, use `?gutenberg-branch=BRANCH_NAME` (for example `trunk`).
2. Repeat the same reproduction steps.
3. Confirm whether the expected behavior now occurs.

### 4) Run targeted regression checks

Check nearby editor behavior that could be affected by the change, such as:

- Related block controls
- Save and reload behavior
- Editor UI states (selected, focused, transformed)
- Frontend output (if relevant)

### 5) Report results

Add a short test report in the ticket or PR with:

- Environment used (WordPress Playground + Gutenberg active)
- Baseline result (before fix)
- After-fix result
- Regression checks performed
- Any follow-up observations

## Suggested test report template

To stay consistent with existing handbook reporting style, use a format similar to the issue reproduction template and adapt headings for GitHub comments.

```md
## Reproduction Report
This report validates whether the issue can be reproduced and whether the Gutenberg PR resolves it in Playground.

### Environment
- WordPress: Playground default (or specify if changed)
- Gutenberg source: `?gutenberg-pr=PR_NUMBER` or `?gutenberg-branch=BRANCH_NAME`
- Browser: <name and version>
- OS: <operating system>
- Additional details: <theme, plugins, settings, post type, user role>

### Baseline Results (Before PR)
- Steps followed:
  1. ...
  2. ...
- Actual result: ...
- Expected result: ...
- Reproduced: Yes/No

### Results After Applying PR
- Same steps repeated: Yes/No
- Result after PR: ...
- Issue resolved: Yes/No/Partially

### Regression Checks
- Checked: ...
- Result: ...

### Additional Notes
- Any follow-up details or edge cases.

### Supplemental Artifacts
- Screenshots/video: <links if available>
```

## Example scenario

1. Open the linked ticket and copy the exact reproduction steps.
2. Reproduce the bug in Playground with Gutenberg active.
3. Save the baseline result (for example: control missing, incorrect transform, unexpected warning).
4. Open Playground with `?gutenberg-pr=` and the PR number (or `?gutenberg-branch=trunk` if the ticket calls for trunk), then repeat the exact steps.
5. Confirm the issue is resolved and validate one or two related editor flows for regressions.
6. Post the test report using the template above.