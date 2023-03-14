# Issue Reproduction
Issue reproduction is a critical step in communicating and confirming how to trigger the undesired behavior that was reported in the ticket.

Provide as much of the environment information as possible and any special configuration considerations (using Docker, multisite with subdomains, etc). Delete any sections from the report that are not applicable.

Example reproduction reports:

-   [Trac #52422](https://core.trac.wordpress.org/ticket/52422#comment:11)
-   [Trac #55671](https://core.trac.wordpress.org/ticket/55671#comment:1)
-   [GitHub Issue #41067](https://github.com/WordPress/gutenberg/issues/41067#issuecomment-1130569145)

## Reproduction Report Template
Here is an example Reproduction Report starter template, which can be copied and pasted directly into a text editor to prepare the report, and then added to Trac as a comment.

Note that if Testing Instructions have already been provided, there shouldn’t be a need to list or duplicate those steps here, making this report short and succinct.

```
== Reproduction Report
This report validates that the issue can be reproduced.

=== Environment
- OS: macOS 12.3.1
- Web Server: Nginx
- PHP: 7.4.29
- WordPress: 6.0-RC1-53341-src
- Browser: Safari 15.4
- Theme: Twenty Twenty-Two
- Active Plugins:
  - Gutenberg 13.2.0
  - WordPress Beta Tester 3.2.1

=== Actual Results
- ✅ Error condition occurs (reproduced).

=== Additional Notes
- Any additional details worth mention.

=== Supplemental Artifacts
Add Inline: [[Image(REPLACE_WITH_IMAGE_URL)]]
or
Add as Attachment
```
