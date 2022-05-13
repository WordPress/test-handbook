## Test Reports
/*menu location: 2nd item OR break into sep docs with subsections?*/

### What Is a Test Report?
A test report provides documented evidence of a reported issue. It answers questions such as:

- Does the issue occur for other users?
- Under what conditions does the issue occur?
- How can evidence of the issue be detected?
- What are the impacts of the issue?
- What does the issue look like to users?

Not only do test reports help substantiate the need to address an issue, but they provide important information to code maintainers so that patches address the correct feature of the software.

#### Key Test Report Features
The exact format of a test report may vary, but good reports always include the following pieces of information:

- Environment -- The operating system, software version, browser used, active plugins, and configuration details.
- Steps to Test -- A sequential list of actions to perform, and observed behavior during the test.
- Results -- A summary indicating whether the test resulted in expected or unexpected behavior (such as whether a patch fixed an issue).
- Screenshots or log output -- Images or logs help provide context for reviewers to quickly identify notable behavior.

##### Screenshots versus Screencasts
Video demonstrations of an issue are sometimes necessary to relate complex behavior, especially for UI issues. However, screencasts are sometimes used in place of detailed test steps, which can hinder ticket reviewers' understanding of the report.

Fortunately, most of the time screenshots can convey information much more quickly, compared with scrubbing through a video. Annotating screenshots is also highly encouraged, as it helps point ticket reviewers at the most important part of an image.

Good screenshots convey important context at a glance.

### Where to Post Test Reports
The best location to post reports is to the corresponding ticket, PR (pull request), or issue page as a new comment.

Most tickets related to WordPress Core can be found in [Core Trac](https://core.trac.wordpress.org/). When reporting test results in Trac, use [WikiFormatting](https://core.trac.wordpress.org/wiki/WikiFormatting).

Issues tracked for the Gutenberg plugin are found in the [Gutenberg GitHub repository](https://github.com/WordPress/gutenberg), where test reports are typically tied to an individual PR, but in some circumstances may call for reproduction results for an issue. To format reporting results in GitHub, use [Markdown](https://docs.github.com/articles/markdown-basics).

### Types of Test Reports
Test reports are broken into two high-level categories: [[Issue Reproduction]] and [[Patch Testing]].

/*here, these could be broken into separate subpages*/

---

### Issue Reproduction
Reproduction of the reported issue, sometimes referred to as "repro", is a critical step in communicating and confirming HOW to trigger the unexpected behavior that was reported.

Here is an example Reproduction Report starting template, which can be copied and pasted directly into a text editor or a Trac comment:

```
== Reproduction Report

How to read this report:
  ✅ <= Based on the ticket, this behavior is ''expected'' (e.g. reproduced the bug successfully).
  ❌ <= This behavior is ''NOT expected'' (e.g. failure to reproduce the bug).

==== Environment
* OS: macOS 12.3.1 (Monterey)
* Web Server: Nginx
* WordPress: 6.0-RC1-53341-src
* Browser: Safari 15.4
* Theme: Twenty Twenty-Two
* Enabled Plugins:
  * Gutenberg 13.2.0
  * WordPress Beta Tester 3.2.1

==== Steps to Reproduce
1. First step.
2. Second step.
3. ✅ Issue occurs.
4. Etc.

==== Reproduction Results
- ✅ Issue is reproducible.

==== Additional Notes
- During testing, make special note of...

==== Screenshots
[[Image(REPLACE_WITH_IMAGE_URL)]]
```

Delete any parts that are not applicable.

Here is a list of example reproduction reports:
- link
- link
- link

---

### Patch Testing
Once a patch is made available for a ticket, it is critical to validate that the code change addresses the issue. During patch testing, also be aware of "regression" issues, where the patch may fix one thing, but break another unintentionally.

Here is an example Test Report starting template, which can be copied and pasted directly into a text editor or a Trac comment:

```
== Test Report

Patch tested: REPLACE_WITH_PATCH_URL

How to read this report:
  ✅ <= Based on the ticket, this behavior is ''expected'' (e.g. bug fixed successfully).
  ❌ <= This behavior is ''NOT expected'' (e.g. failure to fix the bug).

==== Environment
* OS: macOS 12.3.1 (Monterey)
* Web Server: Nginx
* WordPress: 6.0-RC1-53341-src
* Browser: Safari 15.4
* Theme: Twenty Twenty-Two
* Enabled Plugins:
  * Gutenberg 13.2.0
  * WordPress Beta Tester 3.2.1

==== Steps to Test Patch
1. First step.
2. Second step.
3. ✅ Bug does not occur.
4. Etc.

==== Test Results
- ✅ Issue resolved with patch.

==== Additional Notes
- During testing, make special note of...

==== Screenshots
[[Image(REPLACE_WITH_IMAGE_URL)]]
```

Delete any parts that are not applicable.

Here is a list of example patch testing reports:
- link
- link
- link

---

### Combining Reports
Many tickets receive patches *before* test reviewers have had a chance to perform reproduction testing. If this is the case, it is helpful to begin with "Steps to Reproduce" followed by "Steps to Test Patch".

An example combined report might look like this:

```
== Test Report

Patch tested: REPLACE_WITH_PATCH_URL

...

==== Environment
* OS: macOS 12.3.1 (Monterey)
* Web Server: Nginx
* WordPress: 6.0-RC1-53341-src
* Browser: Safari 15.4
* Theme: Twenty Twenty-Two
* Enabled Plugins:
  * Gutenberg 13.2.0
  * WordPress Beta Tester 3.2.1

==== Steps to Reproduce
1. First step.
2. Second step.
3. ✅ Issue occurs.
4. Etc.

==== Steps to Test Patch
1. Apply patch.
2. First step.
3. Second step.
4. ✅ Bug does not occur.
5. Etc.

==== Test Results
- ✅ Issue is reproducible.
- ✅ Issue resolved with patch.

...
```

Alternatively, testers can post a reproduction report first, followed by a complete patch test report in a separate comment.
