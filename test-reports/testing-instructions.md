# Testing Instructions
Testing Instructions provide a list of steps for testers to follow in reproducing a reported issue (before a patch) and/or validating the expected behavior or result actually happens (after applying a patch).

Adding these instructions within the ticket provides needed testing information without testers having to duplicate the same information over and over in test reports.

## Test Report Icons
Always remember to use these icons to facilitate the visual inspection.

- 🐞 => Indicates where issue ("bug") occurs.
- ✅ => Behavior is ''expected''.
- ❌ => Behavior is ''NOT expected''.

## Bug/Defect Testing Instructions Template
An important first step in addressing a reported issue is to clearly communicate the conditions under which the bug occurs, as well as the expected behavior that _should have occurred_. An example expected behavior would be if users should _expect_ that clicking an anchor tag (`<a>`) would navigate to another page, but clicking the anchor actually resulted in no navigation.

Here is an example Testing Instructions starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment:

```
== Testing Instructions
These steps define how to reproduce the issue, and indicate the expected behavior.

=== Environment
- OS: Operating System X.Y.Z
- Web Server: Server Name X.Y.Z
- PHP: X.Y.Z
- WordPress: X.Y-Z
- Browser: Browser Name X.Y.Z
- Theme: Theme Name X.Y.Z 
- Active Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

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
```

## Feature or Enhancement Testing Instructions Template
A new feature or enhancement (non-bug/defect) should identify the steps and instructions for how to validate the patch works and what the expected results or behaviors are (i.e. what should it do, meaning what should the tester be testing to verify it works).

Here is an example Testing Instructions starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment:

```
== Testing Instructions
These steps define how to test the feature or enhancement, and indicates the expected behavior or results.

=== Environment
- OS: Operating System X.Y.Z
- Web Server: Server Name X.Y.Z
- PHP: X.Y.Z
- WordPress: X.Y-Z
- Browser: Browser Name X.Y.Z
- Theme: Theme Name X.Y.Z 
- Active Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

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
```
