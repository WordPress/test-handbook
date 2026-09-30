# Trac Keyword Triage Guide

When a ticket on [WordPress Core Trac](https://core.trac.wordpress.org/) is tagged with `needs-testing`, testers are responsible for evaluating the ticket and deciding on the next step. This guide covers the four keywords testers manage day-to-day, the workflow for deciding which to use, and ready-to-use comment templates for common situations.

<div class="callout callout-info">
  <strong>Note:</strong> This guide focuses on the tester's view of triage. There are other Trac keywords handled by different roles (committers, developers, etc.) that are out of scope here.
</div>

## The Four Keywords

| Keyword | When to Use | Action |
|---------|-------------|--------|
| `needs-testing` | Code review is complete and a patch is ready for testers | Added by committers or developers to signal testers can start |
| `needs-test-info` | Testing instructions are unclear or missing | Remove `needs-testing`, add `needs-test-info` |
| `dev-feedback` | Technical details are needed to understand the issue or patch | Remove `needs-testing`, add `dev-feedback` |
| `needs-refresh` | The patch has merge conflicts and won't apply cleanly | Remove `needs-testing`, add `needs-refresh` |

<div class="callout callout-info">
  <strong>Trac vs GitHub:</strong> Unlike GitHub, Trac does not automatically flag merge conflicts. When a patch no longer applies cleanly, testers must manually switch from <code>needs-testing</code> to <code>needs-refresh</code> so developers know the patch needs to be updated.
</div>

## Workflow

When you see a ticket tagged `needs-testing`, follow this decision tree:

![Trac keyword triage workflow diagram](https://raw.githubusercontent.com/WordPress/test-handbook/refs/heads/trunk/assets/trac-keyword-triage-workflow.png)


**1. Does the ticket have a patch?**

- **No** → This ticket may need bug reproduction rather than patch testing. Check whether the issue can be confirmed before proceeding. Bug reproduction is a separate process outside the scope of this keyword guide.
- **Yes** → Continue to step 2.

**2. Has this been reviewed by someone with commit access?**

- **No** → Remove `needs-testing`, add `dev-feedback`. The patch still needs a committer review before testing.
- **Yes** → Continue to step 3.

**3. Do I have enough information to test?**

- **No — testing steps are missing or unclear** → Remove `needs-testing`, add `needs-test-info`. Ask for clear reproduction steps or environment details.
- **No — I need technical clarification about the code or approach** → Remove `needs-testing`, add `dev-feedback`.
- **Yes** → Continue to step 4.

**4. Does the patch apply cleanly?**

- **No** → Remove `needs-testing`, add `needs-refresh`. Leave a comment describing the conflict (see templates below).
- **Yes** → Test it!

## Comment Templates

Use these templates as a starting point when leaving a comment alongside a keyword change.

### Patch fails to apply

```
I've tried applying the patch ([PATCH_URL]) against the latest `trunk` ([TRUNK_VERSION]), but it fails to apply with the following message:

[PASTE_FAILED_HUNKS_MESSAGE_HERE]

Since the patch cannot be applied cleanly, I'm removing `needs-testing` and adding `needs-refresh`.
```

### Missing or unclear testing instructions

```
I've tried to reproduce the issue described in this ticket, but the steps aren't clear enough to proceed. Could you please:

- Describe the exact steps to reproduce the bug or test the enhancement.
- Provide any relevant code snippets, sample data, or a test plugin if applicable.

I'm removing `needs-testing` and adding `needs-test-info` until more information is available.
```
