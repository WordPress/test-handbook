# How to facilitate a Call for Testing

At a high level there are four parts to facilitating a call for testing within the WordPress project:

- Determine what needs testing.
- Write and share the call for testing.
- Respond to feedback/close the feedback loop.
- Summarize the results.

The final two steps are sometimes optional, depending on how the call for testing is approached and whether someone is available to wrangle the feedback itself. Generally speaking, there are two kinds of calls for testing:

- **Self-serve**: these calls for testing are centered on alerting folks to the need for testing and putting the responsibility on those testing to also close the loop on feedback they have by opening issues themselves. Here’s an example on [testing features coming to 5.9](https://make.wordpress.org/test/2021/11/30/help-test-wordpress-5-9-features/) where folks are encouraged to test and report bugs on their own.
- **Facilitated**: these calls for testing are more interactive and involve a point person(s) who engages with the feedback by opening issues for problems found, engaging directly with testers to ensure clarity, and summarizing feedback usually in a separate post. Here are examples from the FSE Outreach Program’s [calls for testing](https://make.wordpress.org/test/tag/fse-testing-call/) and [summary posts](https://make.wordpress.org/test/tag/fse-testing-summary/).

Remember that it’s better to alert the need for testing than not to test at all so, if there’s something that needs testing but you don’t have capacity to facilitate, it’s still valuable to offer a self serve option.

## Determine what needs testing

If you want to help with calls for testing and you don’t have a specific feature you’re working on in mind, there are a few sources to pull from for insight around what would be most impactful to test. When in doubt, it’s always a good idea to ask in the open what folks would like more testing help on in the [Core Dev and Core Editor meetings](https://make.wordpress.org/meetings/). Otherwise, here are sources to examine:

- Features on roadmap posts for releases often shared 3-4 months before a release ([5.9](https://make.wordpress.org/core/2021/08/13/preliminary-road-to-5-9/), [6.0](https://make.wordpress.org/core/2022/01/26/preliminary-roadmap-for-6-0/), [6.1](https://make.wordpress.org/core/2022/06/04/roadmap-to-6-1/)).
- Features discussed in [Core Editor](https://make.wordpress.org/core/tag/core-editor-agenda/) and [Core Dev](https://make.wordpress.org/core/tag/dev-chat/) meetings.
- [Feature projects](https://make.wordpress.org/core/features/) that reach a level of stability or exploration and need feedback to continue.

## Write and share the call for testing

### Template

Use this handy template and checklist when creating your post. Or, skip all of this. Publishing anything and tagging it `#needs-testing` is sufficient and better than not posting.

#### What is it?

Describe the feature. Include screenshots. Describe any goals and gating criteria, such as parity requirements.

#### Where is it?

Describe how to get to the feature. Direct links are good.

#### What to test

Describe the primary flows to test. Consider using bulleted list or a visual record.

#### What to expect

List known issues and shortcomings (bug tracker links are helpful). Set expectations.

#### How to report

Provide Trac or GitHub links, include the component.

#### Timeline for testing

Express urgency and priority. If there are target dates, provide them.

### Checklist

- Introduce yourself.
- Explain the feature or update, including what’s needed to test (example: a specific version of Gutenberg or WordPress).
- Link to the feature.
- List known issues.
- Provide a short list of testing steps.
- Mention how to provide feedback.
- Include a date for the completion of the testing.
- Include screenshots from multiple devices.
- Keep a beta testing audience in mind.
- Tag the post `#needs-testing`.

### Sharing

Typically, calls for testing are shared on [Make Core](https://make.wordpress.org/core/) or on [Make Test](https://make.wordpress.org/test), depending on the feature and desired audience. Generally speaking, [Make Core](https://make.wordpress.org/core/) gets far more visibility so it’s best to share there when you need more attention on the effort from the start, especially if the efforts aren’t tied to a specific team.

If you’re struggling to get feedback, please view these [high level suggestions](https://make.wordpress.org/core/handbook/tutorials/navigating-the-community/#situationals).

## Close the feedback loop

No matter what approach you’re using, the key is to ensure that information gets back to the right place. Usually, this means issues in [Trac](https://trac.wordpress.org/) or issues in the [Gutenberg GitHub repo](https://github.com/WordPress/gutenberg/issues).

### Self-serve calls for testing approach

This is a mostly hands off approach and solely requires clarity up front in the call for testing you write. Any extra time that you can spend ensuring that the instructions for where and how to report issues/feedback will be very high impact. This might include a short video around how to report or linking off to resources, like [how to use Trac on Learn WordPress](https://learn.wordpress.org/tutorial/how-to-use-trac/).

The biggest downside to this approach is that it requires a greater time investment of those reporting issues to both simply do the work to open an issue/comment on a current one and to know how to do so. This usually results in less engagement.

### Facilitated calls for testing approach

This approach requires substantial involvement on behalf of those facilitating the call for testing. This varies wildly based on how many people respond to the call for testing as well. With this approach, participants in the call for testing leave comments, while facilitators respond with feedback to determine which points should become issues, which need clarification, and so on. Here are some quick best practices:

- Aim to respond within 1-5 days of someone leaving feedback, particularly if what you’re testing is more urgent or tied to a release. This both ensures someone’s effort is appreciated and that the feedback loop remains tight.
- Replicate bugs that are found before reporting.
- Make sure to search for currently open issues before opening new ones.
- Comment on related issues with feedback as it’s relevant. Even if an issue is already known, it’s helpful for those working on them to have greater insight.

### Mixed approach

Of note, you can always offer a mixed approach where you encourage folks to open issues directly as they are comfortable, but have a fallback where you will facilitate closing the loop otherwise for those who aren’t in a position to do so for whatever reason.

## Summarize the results

This section only applies if you are doing facilitated calls for testing. Summaries should be shared as soon as possible after a call for testing ends, ideally no longer than two weeks after. If what you are testing is less urgent, it’s okay to wait longer. These summaries should include the following as much as possible:

- A high level summary with important takeaways.
- List of any bugs.
- List of feature requests.
- Quotes/videos/images/etc to contextualize the more quantitative feedback and examine the broader experience being tested.

In terms of format, this will vary based on what’s being tested. For example, you might want to group related feedback for a feature under a heading (“General Usability feedback”) or you might want to keep things more general (“General Usability feedback”). Here’s an [example of a more general summary](https://make.wordpress.org/test/2021/12/16/fse-program-site-editing-safari-summary/) and an [example of one with more specific headings](https://make.wordpress.org/test/2021/10/05/fse-program-block-theme-switching-summary/) based on common groupings of feedback.