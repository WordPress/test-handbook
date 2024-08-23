## Welcome!
First of all, welcome to the Test release squad! 🎉 It's so awesome you've stepped forward to help spread feature awareness and to support testing efforts for the release!

If you haven’t already, please take some time to read through the release process, team roles, and expectations:

- Release Cycle: https://make.wordpress.org/core/handbook/about/release-cycle/
	- Major Versions: https://make.wordpress.org/core/handbook/about/release-cycle/releasing-major-versions/
- Release Team: https://make.wordpress.org/core/handbook/about/release-cycle/wordpress-release-team-and-focus-leads/ -- some key sections:
	- Shared Responsibilities: https://make.wordpress.org/core/handbook/about/release-cycle/wordpress-release-team-and-focus-leads/#shared-responsibilities
	- Test Responsibilities: https://make.wordpress.org/core/handbook/about/release-cycle/wordpress-release-team-and-focus-leads/#test

Additionally, now is a good time to bookmark key Make WordPress resources, which grow and evolve as the release unfolds. Look for this release's "Development Cycle", "Planning", and "Roadmap" posts for a good start. Here are some examples from 6.3:

- Release Hub: https://make.wordpress.org/core/6-3/
- Planning: https://make.wordpress.org/core/2023/05/18/wordpress-6-3-planning-roundup/
- Roadmap: https://make.wordpress.org/core/2023/05/18/roadmap-to-6-3/

Be on the lookout for posts about the release, features, etc -- consume as much as you can.

And finally, make sure to join the appropriate release leads channel in [Make WordPress Slack](https://make.wordpress.org/chat/) to coordinate with other release squad teams, and to stay in the loop on latest developments! 👍

## Call for Testing Post
The official release Call for Testing (CfT) post helps align the testing community around the key features and enhancements planned for the release. An example is the [CfT for WordPress 6.1](https://make.wordpress.org/test/2022/09/21/help-test-wordpress-6-1/).

### Timing
In recent releases, the CfT has shipped just before the Beta 1 release post goes out on [wordpress.org/news](http://wordpress.org/news), where the release post typically includes a link to the CfT. The thought behind this timing is to allow testing to begin right away, and for bugs to be uncovered early in the cycle. However, there isn't often much urgency at this point, and most testing typically ramps up around RC1.

The CfT is one of the first major tasks for the Test release team. It should be noted that during the beta cycle, there are usually outstanding questions as to what *exactly* will officially make it into the release 😅 With this timeline and ambiguity, it can feel frantic putting it together!

So to be clear: **It’s OKAY for the CfT to be edited/updated during the release cycle, or for follow-up CfTs to be published afterwards.** The post's change log is used to track updates, and major updates may even warrant detailed separate posts in Make/Core. If you’ve followed past releases, you'll notice there are always adjustments made because we're all human, and things fall through the cracks. But most features are typically settled by RC1.

### Post Format
The format of the CfT was adapted from the [WordPress 5.9 CfT](https://make.wordpress.org/test/2021/11/30/help-test-wordpress-5-9-features/), where some of the post is boilerplate, but the majority of content is specific to new release features.

A great way to start the CfT is to make a copy of the document used by the previous Test Team release squad, which is often co-authored in Google Docs.

### Source Information
Info related to features introduced in the release comes from a variety of sources, including:  

- “Roadmap” posts, e.g. [https://make.wordpress.org/core/2022/06/04/roadmap-to-6-1/](https://make.wordpress.org/core/2022/06/04/roadmap-to-6-1/).
- GitHub project boards, e.g. [https://github.com/orgs/WordPress/projects/63](https://github.com/orgs/WordPress/projects/63).
- Trac release queries, e.g. [enhancements and features for 6.2](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&type=enhancement&milestone=6.2&or&status=accepted&status=assigned&status=new&status=reopened&status=reviewing&type=feature+request&milestone=6.2&col=id&col=summary&col=status&col=owner&col=type&col=priority&col=milestone&order=priority).
- “Source of Truth” documents (which typically come _after_ beta, but for which drafts are shared quite early).
- Release walkthroughs (which are inconsistently timed, and usually *after* beta 😔).
- Guidance from the release coordinators or previous Test release leads.

That’s a LOT of info, and it can be helpful to create a CfT planning document to sort out a curated list of items to include. You might also use a are color-coding system to indicate whether the source info is good (🟢), just started (🟡), or needs a lot of work (🔴).

> 💡 For shared Google Docs, make sure to keep the link private among the release team. And use the "document outline" feature to quickly jump between sections.

> **A note on the copy:** Please don’t use the provided text as-is; **rewrite or rephrase instead**. These are original raw reference notes, and won’t make sense in the context of the CfT post. Also keep a watch for inaccuracies in the copy, since it may not be 100% correct (it’s a LOT of info that has to be parsed out of GitHub, Trac, posts, etc 😅).

### Feature Details
Once key features have been identified, and while building out testing info for each, you should strive for the following:

- Provide a clear/recognizable feature name.
- Briefly describe what the feature/update does, including links that are important for context.
- Provide a screenshot, animated GIF, video, or code snippet demonstrating the feature. (Optional, but can be extremely helpful.)
- Include links to test instructions and documentation for the feature.

In the end, it’s up to the Test Team release leads to decide on the final details for the post.

> 💡 Keep in mind that the primary audience for the post is our awesome tester community, so it should provide clear guidance on how to test and report feedback on each feature.

### Useful Tools
Whenever possible, try to include a screenshot, animated GIF, video, or code sample to demonstrate the feature. Here are some tools and services that can be helpful putting together visual assets to support feature details.

- [Licecap](https://www.cockos.com/licecap/) - animated GIFs; great for small demonstrations without sound
- [HandBrake](https://handbrake.fr) - video resizing/compression/transcoding
- [TinyPNG](https://tinypng.com) - image web optimization (WebP, PNG, JPEG)
- [WordPress Playground](https://wordpress.org/playground/) - one-click environments, which can be [pre-configured for tests or demos](https://wordpress.github.io/wordpress-playground/blueprints)
- [`@wp-now/wp-now`](https://www.npmjs.com/package/@wp-now/wp-now) or [wordpress-sqlite.zsh](https://gist.github.com/ironprogrammer/c322963743746bea00085a2439c58f61) - fast, fresh local test sites

Here's an example workflow (on Mac) you might use to show how a feature works:
- If you need a clean test environment, use Playground or `wp-now` to fire up a fresh site (based on the nightly build).
- Use QuickTime to do a screen recording of the feature in action.
- Resize and compress the video using HandBrake.
- Upload the video asset to the test site to attach and use in the post.

### Review
As you go through the list and draft up the copy, some things to consider:  

- Does this describe the feature how a UI user or extender (plugin/theme dev) would understand it?
- Do the provided links give required context for using the feature?
- Would a visual help explain this better?
- Are there test instructions provided at any of the links?

For any of these that don’t have [test instructions](https://make.wordpress.org/test/handbook/test-reports/#feature-or-enhancement-testing-instructions-template), please drop a note into [#core-test](https://wordpress.slack.com/archives/C03B0H5J0), and we can ask contributors to add them 🙌

