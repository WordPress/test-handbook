# Combined Report
Many tickets receive patches _before_ test reviewers have had a chance to list test steps or perform reproduction testing. If this is the case, it is helpful to begin by outlining the test instructions and expected results, followed by the actual reproduction and patch validations.

Alternatively, testers can post testing instructions first (if not supplied), followed by a reproduction report, and then a patch test report, each in separate comments.

## Bug/Defect Combined Report Template
An example combined report might look like this (some sections removed for brevity):

<pre><code>== Test Report

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
- OS: Operating System X.Y.Z
- Web Server: Server Name X.Y.Z
- PHP: X.Y.Z
- WordPress: X.Y-Z
- Browser: Browser Name X.Y.Z
- Theme: Theme Name X.Y.Z 
- Active Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

==== Actual Results
When reproducing a bug/defect:
- ❌ Error condition occurs.

When testing the bugfix patch:
- ✅ Issue resolved with patch.</code></pre>

### GitHub Markdown template

Use this version when posting a combined bug or defect report to GitHub:

```markdown
## Test Report

Patch tested: REPLACE_WITH_PATCH_URL

### Steps to Reproduce or Test

1. First step.
2. Second step.
3. 🐞 Bug occurs.

### Expected Results

When testing a patch to validate it works as expected:

- ✅ What should happen when running the test.

When reproducing a bug:

- ❌ Error condition occurs.

### Environment

- OS: Operating System X.Y.Z
- Web Server: Server Name X.Y.Z
- PHP: X.Y.Z
- WordPress: X.Y-Z
- Browser: Browser Name X.Y.Z
- Theme: Theme Name X.Y.Z
- Active Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

### Actual Results

When reproducing a bug or defect:

- ❌ Error condition occurs.

When testing the bugfix patch:

- ✅ Issue resolved with patch.
```

## Feature or Enhancement Combined Report Template
An example combined report might look like this (some sections removed for brevity):

<pre><code>== Test Report

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
- OS: Operating System X.Y.Z
- Web Server: Server Name X.Y.Z
- PHP: X.Y.Z
- WordPress: X.Y-Z
- Browser: Browser Name X.Y.Z
- Theme: Theme Name X.Y.Z 
- Active Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

=== Actual Results
- ✅ Expected result #1 works as expected with patch.
- ✅ Expected result #2 works as expected with patch.</code></pre>

### GitHub Markdown template

Use this version when posting a combined feature or enhancement report to GitHub:

```markdown
## Test Report

Patch tested: REPLACE_WITH_PATCH_URL

### Steps to Test

1. First step.
2. Second step.
3. Third step.
...
N. Last step.

### Expected Results

Lists each expected result or behavior, i.e. what should happen when running the test(s):

- ✅ Expected result #1.
- ✅ Expected result #2.

### Environment

- OS: Operating System X.Y.Z
- Web Server: Server Name X.Y.Z
- PHP: X.Y.Z
- WordPress: X.Y-Z
- Browser: Browser Name X.Y.Z
- Theme: Theme Name X.Y.Z
- Active Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

### Actual Results

- ✅ Expected result #1 works as expected with patch.
- ✅ Expected result #2 works as expected with patch.
```
