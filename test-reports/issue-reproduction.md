# Issue Reproduction
Issue reproduction is a critical step in communicating and confirming how to trigger the undesired behavior that was reported in the ticket.

Provide as much of the environment information as possible and any special configuration considerations (using Docker, multisite with subdomains, etc). Delete any sections from the report that are not applicable.

Example reproduction reports:

-   [Trac #52422](https://core.trac.wordpress.org/ticket/52422#comment:11)
-   [Trac #55671](https://core.trac.wordpress.org/ticket/55671#comment:1)
-   [GitHub Issue #41067](https://github.com/WordPress/gutenberg/issues/41067#issuecomment-1130569145)

## Reproduction Report Template

### Trac template

Use this version when posting a reproduction report to a Trac ticket:

```
== Reproduction Report

=== Environment
- WordPress: X.Y-Z
- PHP: X.Y.Z
- Server: Server Name X.Y.Z
- Database: Database Name X.Y.Z
- Browser: Browser Name X.Y.Z
- OS: Operating System X.Y.Z
- Theme: Theme Name X.Y.Z
- MU Plugins:
  - MU Plugin 1 X.Y.Z
- Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

=== Steps taken
1. Step one
2. Step two
x. 🐞 Bug occurs: Describe what happened / ❌ Bug is not occurring

=== Expected behavior
- Explain what behaviour you were expecting from the ticket information.

=== Additional Notes
- Any additional details worth mentioning.

=== Screenshots/Screencast with results
- Screenshot showcasing the problem or the bug not occurring.

=== Support Content
- Here you can add any support content useful for testing.
  1. Blueprint JSON
  2. Website Playground URL with parameters
  3. Snippets of code
  4. Additional Screenshots
  5. etc...
```

### GitHub template

Use this version when posting a reproduction report to a GitHub issue:

```markdown
## Reproduction Report

### Environment

- WordPress: X.Y-Z
- PHP: X.Y.Z
- Server: Server Name X.Y.Z
- Database: Database Name X.Y.Z
- Browser: Browser Name X.Y.Z
- OS: Operating System X.Y.Z
- Theme: Theme Name X.Y.Z
- MU Plugins:
  - MU Plugin 1 X.Y.Z
- Plugins:
  - Plugin 1 X.Y.Z
  - Plugin 2 X.Y.Z

### Steps taken

1. Step one
2. Step two
x. 🐞 Bug occurs: Describe what happened / ❌ Bug is not occurring

### Expected behavior

- Explain what behaviour you were expecting from the ticket information.

### Additional Notes

- Any additional details worth mentioning.

### Screenshots/Screencast with results

- Screenshot showcasing the problem or the bug not occurring.

### Support Content

- Here you can add any support content useful for testing.
  1. Blueprint JSON
  2. Website Playground URL with parameters
  3. Snippets of code
  4. Additional Screenshots
  5. etc...
```
