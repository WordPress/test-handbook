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

### 1. Testing Instructions
Testing Instructions provide a list of steps for testers to follow in reproducing a reported issue (before a patch) and/or validating the expected behavior or result actually happens (after applying a patch).

Adding these instructions within the ticket provides needed testing information without testers having to duplicate the same information over and over in test reports.

#### Bug/Defect Testing Instructions Template
An important first step in addressing a reported issue is to clearly communicate the conditions under which the bug occurs, as well as the expected behavior that _should have occurred_. An example expected behavior would be if users should _expect_ that clicking an anchor tag (`<a>`) would navigate to another page, but clicking the anchor actually resulted in no navigation.

Here is an example Testing Instructions starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment:

```
== Testing Instructions
These steps define how to reproduce the issue, and indicate the expected behavior.

=== Steps to Reproduce
1. First step.
2. Second step.
3. 🐞 Bug occurs.

=== Expected Results
When testing a patch to validate it works as expected:
- ✅ What should happen when running the test

When reproducing a bug:
- ❌ Error condition occurs.

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment

  **Test Report Icons:**
  🐞 <= Indicates where issue ("bug") occurs.
  ✅ <= Behavior is ''expected''.
  ❌ <= Behavior is ''NOT expected''.
```

#### Feature or Enhancement Testing Instructions Template
A new feature or enhancement (non-bug/defect) should identify the steps and instructions for how to validate the patch works and what the expected results or behaviors are (i.e. what should it do, meaning what should the tester be testing to verify it works).

Here is an example Testing Instructions starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment:

```
== Testing Instructions
These steps define how to test the feature or enhancement, and indicates the expected behavior or results.

=== Steps to Test
1. First step.
2. Second step.
3. Third step.
...
N. Last step.

=== Expected Results
Lists each expected result or behavior, i.e. what should happen when running the test(s):
- ✅ Expected result #1
- ✅ Expected result #2

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment

  **Test Report Icons:**
  ✅ <= Behavior is ''expected''.
  ❌ <= Behavior is ''NOT expected''.
```

### 2. Issue Reproduction
Issue reproduction is a critical step in communicating and confirming how to trigger the undesired behavior that was reported in the ticket.

Provide as much of the environment information as possible and any special configuration considerations (using Docker, multisite with subdomains, etc). Delete any sections from the report that are not applicable.

Example reproduction reports:

-   [Trac #52422](https://core.trac.wordpress.org/ticket/52422#comment:11)
-   [Trac #55671](https://core.trac.wordpress.org/ticket/55671#comment:1)
-   [GitHub Issue #41067](https://github.com/WordPress/gutenberg/issues/41067#issuecomment-1130569145)

#### Reproduction Report Template
Here is an example Reproduction Report starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment.

Note that if Testing Instructions have already been provided, there shouldn’t be a need to list or duplicate those steps here, making this report short and succinct.

```
== Reproduction Report
This report validates that the issue can be reproduced.

=== Environment
* OS: macOS 12.3.1
* Web Server: Nginx
* PHP: 7.4.29
* WordPress: 6.0-RC1-53341-src
* Browser: Safari 15.4
* Theme: Twenty Twenty-Two
* Active Plugins:
  * Gutenberg 13.2.0
  * WordPress Beta Tester 3.2.1

=== Actual Results
- ✅ Error condition occurs (reproduced).

=== Additional Notes
- Any additional details worth mention.

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment
```

### 3. Patch Testing
Once a patch is made available for a ticket, it is critical to validate that the code change (a) addresses the issue (for bug report) or (b) delivers the expected behavior or result (for feature or enhancement).

During patch testing, please be aware of “regression” issues, where the patch may fix one thing, but break another unintentionally.

Example patch testing reports:

-   [Trac #54596](https://core.trac.wordpress.org/ticket/54596#comment:40)
-   [Trac #54896](https://core.trac.wordpress.org/ticket/54896#comment:3)
-   [Trac #54905](https://core.trac.wordpress.org/ticket/54905#comment:29)

#### Bug/Defect Patch Report Template
Here is an example Test Report starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment.

If already provided in the ticket, Testing Instructions do not need to be duplicated in Test Report.

```
== Test Report
This report validates that the indicated patch addresses the issue.

Patch tested: REPLACE_WITH_PATCH_URL

=== Environment
* OS: macOS 12.3.1
* Web Server: Nginx
* PHP: 7.4.29
* WordPress: 6.0-RC1-53341-src
* Browser: Safari 15.4
* Theme: Twenty Twenty-Two
* Active Plugins:
  * Gutenberg 13.2.0
  * WordPress Beta Tester 3.2.1

=== Actual Results
- ✅ Issue resolved with patch.

=== Additional Notes
- Any additional details worth mention.

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment
```

#### Feature or Enhancement Patch Report Template
Here is an example Test Report starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment.

In the “Actual Results” section, list each of the “Expected Results” and report your findings using ✅ to indicate your testing validated it works as expected or ❌ to indicate it does not work as expected.

```
== Test Report
This report validates that the indicated patch addresses the issue.

Patch tested: REPLACE_WITH_PATCH_URL

=== Environment
* OS: macOS 12.3.1
* Web Server: Nginx
* PHP: 7.4.29
* WordPress: 6.0-RC1-53341-src
* Browser: Safari 15.4
* Theme: Twenty Twenty-Two
* Active Plugins:
  * Gutenberg 13.2.0
  * WordPress Beta Tester 3.2.1

=== Actual Results
- ✅ Expected result #1 works as expected with patch.
- ✅ Expected result #2 works as expected with patch.

=== Additional Notes
- Any additional details worth mention.

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment
```

If already provided in the ticket, Testing Instructions do not need to be duplicated in Test Report.

### 4. Combined Report
Many tickets receive patches _before_ test reviewers have had a chance to list test steps or perform reproduction testing. If this is the case, it is helpful to begin by outlining the test instructions and expected results, followed by the actual reproduction and patch validations.

Alternatively, testers can post testing instructions first (if not supplied), followed by a reproduction report, and then a patch test report, each in separate comments.

#### Bug/Defect Combined Report Template
An example combined report might look like this (some sections removed for brevity):

```
== Test Report

Patch tested: REPLACE_WITH_PATCH_URL

=== Steps to Reproduce or Test
1. First step.
2. Second step.
3. 🐞 Bug occurs.

=== Expected Results
When testing a patch to validate it works as expected:
- ✅ What should happen when running the test

When reproducing a bug:
- ❌ Error condition occurs.

=== Environment
...

==== Actual Results
When reproducing a bug/defect:
- ❌ Error condition occurs.

When testing the bugfix patch:
- ✅ Issue resolved with patch.

...
```

#### Feature or Enhancement Combined Report Template
An example combined report might look like this (some sections removed for brevity):

```
== Test Report

Patch tested: REPLACE_WITH_PATCH_URL

=== Steps to Test
1. First step.
2. Second step.
3. Third step.
...
N. Last step.

=== Expected Results
Lists each expected result or behavior, i.e. what should happen when running the test(s):
- ✅ Expected result #1
- ✅ Expected result #2

=== Environment
* OS: macOS 12.3.1
* Web Server: Nginx
* PHP: 7.4.29
* WordPress: 6.0-RC1-53341-src
* Browser: Safari 15.4
* Theme: Twenty Twenty-Two
* Active Plugins:
  * Gutenberg 13.2.0
  * WordPress Beta Tester 3.2.1

=== Actual Results
- ✅ Expected result #1 works as expected with patch.
- ✅ Expected result #2 works as expected with patch.

...
```
