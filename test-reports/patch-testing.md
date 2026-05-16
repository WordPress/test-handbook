# Patch Testing
Once a patch is made available for a ticket, it is critical to validate that the code change (a) addresses the issue (for bug report) or (b) delivers the expected behavior or result (for feature or enhancement).

If you haven't applied a patch yet, see [Test Core Tickets with Playground](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-playground/) or [Test Core Tickets with Grunt](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-grunt/) to get started.

During patch testing, please be aware of “regression” issues, where the patch may fix one thing, but break another unintentionally.

Example patch testing reports:

-   [Trac #54596](https://core.trac.wordpress.org/ticket/54596#comment:40)
-   [Trac #54896](https://core.trac.wordpress.org/ticket/54896#comment:3)
-   [Trac #54905](https://core.trac.wordpress.org/ticket/54905#comment:29)

## Patch Testing Report Template

### Trac template

Use this version when posting a patch testing report to a Trac ticket:

In the "Steps taken" section, the final step reports the outcome using ✅ to indicate the patch is solving the problem or ❌ to indicate the patch is failing.

```
== Patch Testing Report

Patch tested: REPLACE_WITH_PATCH_URL

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
x. ✅ Patch is solving the problem: Describe what was fixed / ❌ Patch is failing: Describe what went wrong

=== Expected result
- Explain what results you were expecting from this patch.

=== Additional Notes
- Any additional details worth mentioning.

=== Screenshots/Screencast with results
- Screenshot/Screencast before
- Screenshot/Screencast after

=== Support Content
- Here you can add any support content useful for testing.
  1. Blueprint JSON
  2. Website Playground URL with parameters
  3. Snippets of code
  4. Additional Screenshots
  5. etc...
```

### GitHub template

Use this version when posting a patch testing report to a GitHub PR:

```markdown
## Patch Testing Report

Patch tested: REPLACE_WITH_PATCH_URL

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
x. ✅ Patch is solving the problem: Describe what was fixed / ❌ Patch is failing: Describe what went wrong

### Expected result

- Explain what results you were expecting from this patch.

### Additional Notes

- Any additional details worth mentioning.

### Screenshots/Screencast with results

- Screenshot/Screencast before
- Screenshot/Screencast after

### Support Content

- Here you can add any support content useful for testing.
  1. Blueprint JSON
  2. Website Playground URL with parameters
  3. Snippets of code
  4. Additional Screenshots
  5. etc...
```
