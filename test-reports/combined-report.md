# Combined Report
Many tickets receive patches _before_ test reviewers have had a chance to list test steps or perform reproduction testing. If this is the case, it is helpful to begin by outlining the test instructions and expected results, followed by the actual reproduction and patch validations.

Alternatively, testers can post testing instructions first (if not supplied), followed by a reproduction report, and then a patch test report, each in separate comments.

## Bug/Defect Combined Report Template
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

## Feature or Enhancement Combined Report Template
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
