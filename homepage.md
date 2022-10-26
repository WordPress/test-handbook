# Welcome!

This group exists to raise the quality of the WordPress experience through testing.

We practice monitoring important [flows](https://make.wordpress.org/test/glossary/). Bugs and bad experiences encountered while on flow patrol are [kibbled](https://make.wordpress.org/test/glossary/) and [ticketed](https://make.wordpress.org/core/handbook/reporting-bugs/). Continuous integration means it’s especially important to encourages use of our own software as we develop it and increase awareness for what our users are experiencing day to day.

- Continuously exercise major flows. [Publishing a captioned gallery](https://make.wordpress.org/test/2015/04/22/publish-a-captioned-gallery-iphone-6-portrait/) starting from the logged-in front page, for example, is an important flow that exercises the toolbar, editor, media modal, and galleries. Regressions anywhere in this flow should be noticed and fixed promptly.
- Continuously exercise flows through new features as they are developed.
- Post [visual records](https://make.wordpress.org/test/glossary/) (vizrecs) of flows to [make/test](https://make.wordpress.org/test/). Show the flow. We must witness what we’re making every step of the way.
- For features that replace or change existing ui, perform baseline visual records of major flows through the existing interface. These baselines can be used in [comparison vizrecs](https://make.wordpress.org/test/2015/02/12/press-this-copy-and-add-bookmarklet-macnchrome-4-2-alpha-31432/)as development proceeds.
- Test patches and add screenshots to tickets. Screenshots of patched interfaces often do not make it on to tickets, particularly mobile screenshots. Use [#needs-screenshots](https://make.wordpress.org/core/handbook/contribute/trac/keywords/) to tag tickets that need screenshots. Making sure tickets have screenshots promotes [visual oxygen](https://make.wordpress.org/test/handbook/glossary/#visual-oxygen).
- Post screenshots of bad, broken ui/ux in new features to the appropriate [feature channels](https://make.wordpress.org/core/features-as-plugins/) on Slack. Provide a visual heads up to feature teams.
- Drop screenshots and vizrecs into ui/ux conversations in slack. So many conversations take place without reference to visuals or flow and often in complete ignorance of mobile.
- [Create tickets](https://make.wordpress.org/core/handbook/reporting-bugs/) as needed. Crosslink tickets with any relevant vizrecs on [make/test](https://make.wordpress.org/test/). Always include screenshots in tickets. Awareness requires history. Record what the interface looks like now, before changes.
- Share your experiences and frustrations on [make/test](https://make.wordpress.org/test/) and in [#core-test](https://wordpress.slack.com/archives/core-test/). Storyboard them with visual records.
- Collect user experiences. Curate examples of real-life flow. Be an Alan Lomax of flow.
- Do this with every device you have, particularly phones.
- Be a critical part of a feature team.

The easiest way to continuously test WordPress as it is developed is to set up a site to [automatically update to the latest nightly build](https://make.wordpress.org/core/handbook/testing/beta/). After that, consult the [triage](https://make.wordpress.org/test/handbook/triage/) page.
