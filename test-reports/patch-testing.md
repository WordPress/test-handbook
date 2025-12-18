# Patch Testing
Once a patch is made available for a ticket, it is critical to validate that the code change (a) addresses the issue (for bug report) or (b) delivers the expected behavior or result (for feature or enhancement).

During patch testing, please be aware of “regression” issues, where the patch may fix one thing, but break another unintentionally.

Example patch testing reports:

-   [Trac #54596](https://core.trac.wordpress.org/ticket/54596#comment:40)
-   [Trac #54896](https://core.trac.wordpress.org/ticket/54896#comment:3)
-   [Trac #54905](https://core.trac.wordpress.org/ticket/54905#comment:29)

## Bug/Defect Patch Report Template
Here is an example Test Report starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment.

```
== Test Report
This report validates that the indicated patch addresses the issue.

Patch tested: REPLACE_WITH_PATCH_URL

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
- ✅ Issue resolved with patch.

=== Additional Notes
- Any additional details worth mention.

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment
```

If already provided in the ticket, Testing Instructions do not need to be duplicated in the Test Report.

## Feature or Enhancement Patch Report Template
Here is an example Test Report starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment.

In the “Actual Results” section, list each of the “Expected Results” and report your findings using ✅ to indicate your testing validated it works as expected or ❌ to indicate it does not work as expected.

```
== Test Report
This report validates that the indicated patch addresses the issue.

Patch tested: REPLACE_WITH_PATCH_URL

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
- ✅ Expected result #2 works as expected with patch.

=== Additional Notes
- Any additional details worth mention.

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment
```

If already provided in the ticket, Testing Instructions do not need to be duplicated in the Test Report.
