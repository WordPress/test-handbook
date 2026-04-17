# Testing Gutenberg Tickets with WordPress Playground

This guide focuses on the ticket testing workflow for Gutenberg changes using WordPress Playground. The goal is to help contributors reproduce issues, verify fixes, and report results in a consistent format.

## When to use Playground

Use Playground when a Gutenberg ticket can be tested in a browser-only WordPress environment.

Use a full local environment when testing depends on:

- Build tooling or custom scripts
- Complex server configuration
- Integration with external services
- Performance or browser automation testing

## Prerequisites

Before testing, collect the following from the ticket or PR:

- Ticket/issue URL
- PR or patch URL (if a fix exists)
- Exact reproduction steps
- Expected behavior
- Any required preconditions (theme, post type, specific block settings, user role)

Then open Playground: https://playground.wordpress.net/

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

1. Apply the PR/patch in the best available way for Playground.
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

Use this template for consistent reporting:

```md
### Playground test report

- Ticket: <ticket URL>
- PR/Patch tested: <PR or patch URL>
- Environment: WordPress Playground, Gutenberg plugin active

#### Baseline (before fix)
- Steps followed:
  1. ...
  2. ...
- Actual result: ...
- Expected result: ...

#### After applying fix
- Result: ...

#### Regression checks
- Checked: ...
- Result: ...

#### Notes
- ...
```

## Example scenario

1. Open the linked ticket and copy the exact reproduction steps.
2. Reproduce the bug in Playground with Gutenberg active.
3. Save the baseline result (for example: control missing, incorrect transform, unexpected warning).
4. Apply the linked patch/PR and repeat the exact steps.
5. Confirm the issue is resolved and validate one or two related editor flows for regressions.
6. Post the test report using the template above.