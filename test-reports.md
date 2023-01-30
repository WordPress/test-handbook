# Test Reports

## What Is a Test Report?
A test report provides a documented record of a reported issue. It answers questions such as:

- Does the issue occur for other users?
- Under what conditions does the issue occur?
- How can the issue be detected?
- What are the impacts of the issue?
- How does the issue appear to users?

Not only do test reports help substantiate the need to address an issue, but they provide important information to code maintainers so that patches address the correct feature of the software.

## Key Test Report Features
The exact format of a test report may vary, but good reports always include the following pieces of information:

- **Environment**: The operating system, software version, browser used, active plugins, and special configuration details (as applicable).
- **Steps to Test**: A sequential list of actions to perform, and the expected behavior (i.e. what should happen) during the test.
- **Test Results**: Clear indication of whether the test resulted in expected or unexpected behavior (such as whether a patch fixed an issue).
- **Supplemental Artifacts**: Screenshots and animated GIFs, screencasts and videos, and log files (such as excerpts from `debug.log`) help provide additional context for reviewers to quickly identify notable behavior.

Use supplemental artifacts to help further explain the results of the test. There are no hard rules in what and how to provide this additional information, as the level of detail required can vary greatly between tickets.

## Identify Expected and Unexpected Behavior
Visual cues that identify whether tests went as planned are useful for testers, code reviewers, and committers alike. Trac tickets, GitHub issues, and PRs can become very lengthy, so calling out the most important details of a test using emoji or icons can save time.

“Expected” refers to behaviors, results, or observations of what is under test (see the following list) and are highlighted with a green checkmark emoji ✅:

- When reproducing a reported issue, expected refers to the reported issue.*
- When testing a bugfix patch, expected refers to the patch resolving the reported issue.
- When testing a feature or enhancement, expected refers to what the feature or enhancement _should_ do.

“Unexpected” refers to behaviors, results, or observations that should not happen (see the following list) and are highlighted with a red “X” emoji ❌:

- When reproducing a reported issue, unexpected refers to any results that are not indicated by the issue reporter.
- When testing a bugfix patch, unexpected refers to the patch not adequately addressing the issue or producing another bug or side-effect.
- When testing a feature or enhancement, unexpected refers to anything that is not listed in the expected results (such as a bug, error, wrong UI displays, etc.) and/or the expected result doesn’t happen.

> * While at times it may seem counterintuitive, successful reproduction of the error as indicated in the ticket is considered _“expected”_, and should be marked accordingly (✅).

## Where to Post Test Reports
The best location to post reports is to the corresponding ticket, issue, or PR (pull request) as a new comment.

Most tickets related to WordPress Core can be found in [Core Trac](https://core.trac.wordpress.org/). When reporting test results in Trac, use [WikiFormatting](https://core.trac.wordpress.org/wiki/WikiFormatting).

Issues tracked for the Gutenberg plugin are found in the [Gutenberg GitHub repository](https://github.com/WordPress/gutenberg), where it is helpful to provide reproduction test results in the reported issue. Patch test reports should be added to an individual PR’s comments. To format test report results in GitHub, use [Markdown](https://docs.github.com/articles/markdown-basics).

## Types of Test Reports
There are three primary test report categories, and each comes with its own focus: [Testing Instructions](https://make.wordpress.org/test/handbook/test-reports/#1-testing-instructions), [Issue Reproduction](https://make.wordpress.org/test/handbook/test-reports/#2-issue-reproduction), and [Patch Testing](https://make.wordpress.org/test/handbook/test-reports/#3-patch-testing). In some situations a [Combined Report](https://make.wordpress.org/test/handbook/test-reports/#4-combined-report) may be required.

- [Testing Instructions](https://make.wordpress.org/test/handbook/test-reports/testing-instructions/)
- [Issue Reproduction](https://make.wordpress.org/test/handbook/test-reports/issue-reproduction/)
- [Patch Testing](https://make.wordpress.org/test/handbook/test-reports/patch-testing/)
- [Combined Report](https://make.wordpress.org/test/handbook/test-reports/combined-report/)
