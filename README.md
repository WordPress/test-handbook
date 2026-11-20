# Make WordPress Test Handbook

This repo is dedicated to the Make WordPress Test Handbook located at [https://make.wordpress.org/test/handbook/](https://make.wordpress.org/test/handbook/). All pages in this GitHub repository are automatically synchronized with the handbook.

We need to respect all the basic [Markdown guidelines](https://www.markdownguide.org/cheat-sheet/) for everything to be synchronized as expected. If you have any doubts, feel free to ask in the [`#core-test`](https://wordpress.slack.com/messages/core-test/) channel in the WordPress Slack.

## Contributing

### Fixing a mistake

If you want to propose a fix, you can simply [open a new Issue](https://github.com/WordPress/test-handbook/issues) and if you can fix it, [send a Pull Request](https://github.com/WordPress/test-handbook/pulls) referencing that issue.

For example, if you create the issue `#1500` explaining the trouble, then you can send a PR with the text `Fixes #1500` to reference it.

### Proposing an enhancement

If you want to propose an enhancement, [here are the steps](https://make.wordpress.org/test/2025/09/30/the-test-handbook-overhaul/#addressing-future-improvements-to-the-handbook):

1. You should [create an Issue](https://github.com/WordPress/test-handbook/issues) explaining the enhancement
2. You might attend a Core Test meeting in the [Slack channel `#core-test`](https://wordpress.slack.com/messages/core-test/) and inform them about this issue to be discussed. You can suggest it be added to the agenda the day after or simply comment on this in the Open Floor section of the meeting.
3. You can submit a Pull Request referencing the Issue once the enhancement is ready for review.
4. If there are no opposing arguments and there are at least 2 reviews by the Test Team, after one week it will get merged.

### Automated checks

Every pull request runs two checks:

- `bin/handbook-manifest.json` must list every page. Each entry must point to a file that exists, and each `parent` must be another manifest key.
- All Markdown files must pass [markdownlint](https://github.com/DavidAnson/markdownlint) with the rules in `.markdownlint.json`.

To run them locally from the repository root (Node.js 20 or later):

```bash
node .github/scripts/validate-manifest.mjs
npx markdownlint-cli@0.45.0 "**/*.md" --ignore node_modules
```

Most Markdown errors can be fixed automatically by adding `--fix` to the second command. The manifest check only sees files tracked by git, so run `git add` on new pages first.
