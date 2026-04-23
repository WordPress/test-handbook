# Triage & Testing Issues

In context of bug repositories such as Trac or GitHub, triage means sorting, labeling, and closing duplicate incoming issues and testing means manually testing bug reports, questions, and feature requests.

## Trac Triage

When working with [WordPress Core Trac](https://core.trac.wordpress.org/), testers use a specific set of keywords to signal the state of a ticket. For a full explanation of those keywords, the decision workflow, and ready-to-use comment templates, see the [Trac Keyword Triage Guide](https://make.wordpress.org/test/handbook/triage/trac-keyword-triage-guide/). Triage is intended to be fast and to clear away clutter. Testing checks to make sure each issue is accurate and concise and has enough relevant information needed in order for a contributor who is a developer or designer to take action. Then end goal for testing and triage is a clean list of verified bug reports and feature requests that are ready for action or decision.
## Testing Bugs
1. Start with the [`Needs Testing`](https://github.com/WordPress/gutenberg/labels/Needs%20Testing) or [`[Type] Bug`](https://github.com/WordPress/gutenberg/labels/%5BType%5D%20Bug) label or the [oldest open issues](https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+sort%3Acreated-asc). Go to [Needs Technical Feedback](https://github.com/WordPress/gutenberg/labels/Needs%20Technical%20Feedback) for issues that need testing from a developer perspective. If you are testing from a support perspective, [`[Type] Help Request`](https://github.com/WordPress/gutenberg/labels/%5BType%5D%20Help%20Request) is a good spot.
2. Always search for duplicate issues first and close or consolidate them with a thank you.
3. Make sure the title is accurate and descriptive and suggest a change if it isn’t.
4. Test to make sure the issue is valid—if not, suggest closing the issue with a kind comment.
5. Add steps to reproduce if they are missing and would add value.
6. Add a screenshot if there isn’t already one and if it will add value.
7. Ask clarifying questions if needed and add a the `[Type] Needs More Info` label.

## Triaging Incoming Issues
1. Start with the newest incoming issues or [unlabeled open issues](https://github.com/WordPress/gutenberg/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+no%3Alabel).
2. Search right away for duplicate issues or issues that can be consolidated, and note them.
3. If asking for more information would be helpful, ask right away.
4. If the issue appears valid and urgent, test it right away.
5. If you do not have rights to add labels, continue to the [Testing Bugs](https://make.wordpress.org/test/handbook/triage/#testing-bugs) section. If you do have rights to add labels, continue to the [Triage for Admins](https://make.wordpress.org/test/handbook/triage/#triage-for-admins) section.

## Triage for Admins
In the case of GitHub, such as the gutenberg repo, not everyone has write permissions to add labels or update titles. If you do have write permissions, you have the option to do a bit more in depth triage.

1. Start with the newest incoming issues or unlabeled issues.
2. Label each issue with a focus area and type.
3. Update the title if it can be made more clear while still keeping it as short as possible.
4. If the issue is a duplicate or can be consolidated, close it with a note and add the `[Status] Duplicate` label.
5. If more information is needed, add the `[Status] Needs More Info`  label and ask troubleshooting questions.
6. Add workflow labels if needed, such as `Needs Testing`, `Needs Design Feedback`, or `Needs Decision`.

## Good Details to Include
- Add a screenshot whenever it makes sense. Videos should only be added if a screenshot isn’t enough to communicate the issue.
- Version numbers for WordPress, plugin (if applicable), OS, and browser.
- Errors from the browser Console tab in Developer Tools.
- Failed API calls from the browser Network tab in Developer Tools.
- Server error logs.

When testing reported issues, try to remain as unbiased as possible. Follow the steps or explanation of the problem to the best of your ability and try to repeat it. State facts about what you tested and what happened. Stay concise, and only add a comment if you think it adds value. Note: this document is currently centered around Gutenberg, and we expect that to change, because this is just a starting point. Please join us in [#core-test on Slack](https://wordpress.slack.com/archives/core-test/) to discuss!
