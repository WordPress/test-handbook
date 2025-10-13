# Documenting Flow

## Triage Tags

Triage of posts on make/flow is done with tags.

### Component

Tag make/flow posts with the relevant [core component](https://make.wordpress.org/core/components/), [iOS component](https://github.com/wordpress-mobile/WordPress-iOS/labels), or [Android component](https://github.com/wordpress-mobile/WordPress-Android/labels). The component is the most important triage tag. When tagging a visual record that crosses components, tag all exercised components. Tagging by component allows component teams to follow the make/flow posts relevant to their team. For example, the Editor component team follows their [tag page](https://make.wordpress.org/test/tag/editor/) and [feed](https://make.wordpress.org/test/tag/editor/feed/).  Components that are exercised by many flows will be tagged more often. This is a feature.

Here are some often used components. For the complete list, see the [core components page](https://make.wordpress.org/core/components/):

- [customize](https://make.wordpress.org/core/components/customize/)
- [editor](https://make.wordpress.org/core/components/editor/)
- [media](https://make.wordpress.org/core/components/media/)
- [network-and-sites](https://make.wordpress.org/core/components/networks-sites/) – We are inconsistent with this component. Use “multisite” instead of “network-and-sites” when tagging.
- [toolbar](https://make.wordpress.org/core/components/toolbar/)
- [upgrade-install](https://make.wordpress.org/core/components/upgrade-install/)

### Device

The device tags specify form factor. These are mainly about screen size.

- [phone](https://make.wordpress.org/test/tag/phone/)
- [phablet](https://make.wordpress.org/test/tag/phablet/)
- [tablet](https://make.wordpress.org/test/tag/tablet/)
- [desktop](https://make.wordpress.org/test/tag/desktop/)

### Platform

Platform is the operating system:

- [android](https://make.wordpress.org/test/tag/android/)
- [ios](https://make.wordpress.org/test/tag/ios/)
- [linux](https://make.wordpress.org/test/tag/linux/)
- [macos](https://make.wordpress.org/test/tag/macos/)
- [windows](https://make.wordpress.org/test/tag/windows/)
- [winphone](https://make.wordpress.org/test/tag/winphone/)

### Application or Web

Web interfaces are served from core WordPress to a web browser. All posts relating to our web interfaces are tagged with web. Posts relating to the iOS or Android applications are tagged app. If a post documents a flow that traverses both web interfaces and an application (such as moving from app to web to use a feature not yet in the app), use both tags. The web tag is used inconsistently. Consider it optional. The app tag is consistently used and is not optional.

- [app](https://make.wordpress.org/test/tag/app/)
- web

### Browser

For web interfaces, indicate the browser used. This is not necessary for apps.

- [chrome](https://make.wordpress.org/test/tag/chrome/)
- [explorer](https://make.wordpress.org/test/tag/explorer/)
- [firefox](https://make.wordpress.org/test/tag/firefox/)
- [opera](https://make.wordpress.org/test/tag/opera/)
- [safari](https://make.wordpress.org/test/tag/safari/)

### Version and Development Phase

The iOS and Android apps offer beta releases in addition to the production releases available through the app stores. Core WordPress offers nightly builds. When using pre-release software, use the beta tag, otherwise use production. We haven’t used these consistently. If you don’t add them, welcome to the club. Development Phase might be retired.

- [beta](https://make.wordpress.org/test/tag/beta/)
- production

To make finding visual records taken against a certain release easier, include the version number of the interface being tested as a tag. Using only the major release number is sufficient.

- [4.3](https://make.wordpress.org/test/tag/4-3/) – current production core
- [4.4](https://make.wordpress.org/test/tag/4-4/) – current development core
- 5.2 – current production iOS app
- 5.4 – current beta iOS app
- 4.2 – current production Android app

### Workflow

The workflow tags are analogous to the [workflow tags](https://make.wordpress.org/core/handbook/trac/keywords/) used in core trac, with a few additions. We haven’t used these consistently either. This needs to be hashed out. needs-ticket and needs-captions are the most frequently used.


- 2nd-opinion  
- needs-refresh  
- reporter-feedback  
- dev-feedback  
- needs-testing  
- [needs-ticket](https://make.wordpress.org/test/tag/needs-ticket/) – Posts that report bugs need to be cross-referenced with trac tickets.
- [needs-captions](https://make.wordpress.org/test/tag/needs-captions/) – Galleries need to be captioned.

### Trends and Patterns

Spotting trends and patterns is fun and an important part of flow patrol. For example, iOS devices often expose [scroll bleed](https://make.wordpress.org/test/tag/scroll-bleed/) bugs in our modals. Tag scroll bleed related posts with [scroll-bleed](https://make.wordpress.org/test/tag/scroll-bleed/). Here are some common patterns.


- [Scroll bleed](https://make.wordpress.org/test/glossary/#scroll-bleed): [scroll-bleed](https://make.wordpress.org/test/tag/scroll-bleed/)

- [Keyboard flyup](https://make.wordpress.org/test/glossary/#keyboard-flyup):  [keyboard-flyup](https://make.wordpress.org/test/tag/keyboard-flyup/)
- [Rogue cursor](https://make.wordpress.org/test/glossary/#rogue-cursor): [rogue-cursor](https://make.wordpress.org/test/tag/rogue-cursor/)
- [Boxed input scrolling](https://make.wordpress.org/test/glossary/#boxed-input-scrolling): [boxed-input-scrolling](https://make.wordpress.org/test/tag/input-scrolling/)
- [Desktop bias](https://make.wordpress.org/test/glossary/#desktop-bias): [desktop-bias](https://make.wordpress.org/test/tag/desktop-bias/)
- [Forked flow (open in new window)](https://make.wordpress.org/test/glossary/#forked-flow): [forked-flow](https://make.wordpress.org/test/tag/forked-flow/)
- [Treshold friction](https://make.wordpress.org/test/glossary/#threshold-friction): [threshold-friction](https://make.wordpress.org/test/tag/threshold-friction/)
- [Anxiety flow](https://make.wordpress.org/test/glossary/#anxiety-flow): [anxiety-flow](https://make.wordpress.org/test/tag/anxiety-flow/)

For more trends and patterns, see the [glossary](https://make.wordpress.org/test/handbook/glossary/).

## The Flow of Flow Patrol

make/flow is a venue for documenting flow, reporting bugs, and discussing usability through screenshots, galleries, and screencasts. As we go about our daily publishing with WP, we document our experience of WP, with WP. This recursive dogfooding is the basis of [flow patrol](https://make.wordpress.org/test/handbook/).

### Visual Bug Report

The simplest way to document your experience is to publish visual bug reports. A misaligned button label on the Posts screen, for example, is easily captured in a screenshot and published to make/flow. Or, in the case of “[Posts list: double entry in post list after publishing, iOS app beta, iPhone 6+](https://make.wordpress.org/test/2015/06/18/double-entry-in-post-list-after-publishing-ios-app-beta/)“, a doubled entry in the [posts list](https://github.com/wordpress-mobile/WordPress-iOS/labels/Posts%20List) of the iOS app is captured. The title provides a short description of the problem, headline style, followed by some platform, device, and version context. The body of the post is one screenshot with some explanatory text of the problem. That’s all a visual bug report needs to be. We want a low barrier, especially for those reporting phone bugs from phones. Our example visual bug report was published using the iOS app. The bug was found in the iOS app and then reported with the iOS app. This recursive dogfooding is playfully referred to as [kibbling](https://make.wordpress.org/test/glossary/#kibbling). Since visual bug reports are the simplest means of feedback in this visual kibbling process, they’re sometimes known as kibbles. A visual bug report isn’t limited to reporting defects. A visual bug report can be a visual opinion or anecdote. Kibbles, all.

### Tagging a Visual Bug Report

If you want to triage your own visual bug report, add tags from the Triage Tags lists at the top of this page. The tags for our “[Posts list: double entry in post list after publishing](https://make.wordpress.org/test/2015/06/18/double-entry-in-post-list-after-publishing-ios-app-beta/)” example are app, beta, ios, phablet, posts-list, and visual-bug-report. This bug is evidenced on the posts list screen, so [posts-list](https://github.com/wordpress-mobile/WordPress-iOS/labels/Posts%20List) is the component tag. Consult the [iOS app’s list of labels on GitHub](https://github.com/wordpress-mobile/WordPress-iOS/labels) for a suitable label. Lowercase that label and replace any spaces with dashes to turn a label into a component tag. “Posts List” becomes posts-list. When turning components and labels into tags, follow the rules WordPress uses to sanitize titles for urls.

With the components established, make sure the title of the post is correctly prefixed with component names. In this example, Posts list is the component so the title prefix is “Posts list:”.

The app tag is from the “Application or Web” list. Since the bug is in our iOS application rather than in a web view in Safari, our visual bug report is tagged with app.

beta is the Development Phase. The iOS app offers beta builds and official app store builds. This bug was found in a beta build.

An iPhone 6+ is considered to be a phablet sized device, so the phablet tag is used from the Device list.

Since this post is a visual bug report, it is tagged [visual-bug-report](https://make.wordpress.org/test/tag/visual-bug-report/).

Don’t let these tags stand in the way of publishing. If you don’t have time or patience for them at the moment of publishing, don’t worry about them. The Flow Patrol team will add them later.

### Monitoring Tag Feeds

Now that this visual bug report is tagged, it can be consumed in a number of ways. Someone who wants to follow all make/flow posts relating to the iOS and Android apps can visit this link: https://make.wordpress.org/test/tag/app/ Tag intersections can be used to get all posts relating to the iOS app or the Android app. https://make.wordpress.org/test/tag/ios+app/ https://make.wordpress.org/test/tag/android+app/ Append feed/ to any WordPress url to turn that url into a feed. https://make.wordpress.org/test/tag/ios+app/feed/ make/flow is a visual zeitgeist of our usability. Hopefully, this set of tags and their intersections will be lightweight enough to use from a phone and sufficient to helping us consume and understand this attempt at continuous recursive dogfooding and visual survey. If nothing else, we’re using what me make.

### Triaging a Visual Bug Report

After tagging, the next triage phase is creating a ticket. Continuing with our “[Double entry in post list after publishing](https://make.wordpress.org/test/2015/06/18/double-entry-in-post-list-after-publishing-ios-app-beta/)” example, search the [iOS app’s open tickets over on Github](https://github.com/wordpress-mobile/WordPress-iOS/issues). If a ticket already exists for this bug, comment on the ticket with a link to the make/flow post. The post will provide another data point to developers and document the bug with a screenshot. If this bug has not already been reported, [create a new issue](https://github.com/wordpress-mobile/WordPress-iOS/issues/new). Label the ticket with the appropriate component. Our example make/flow post is tagged posts-list, which corresponds to the Posts List label. On the ticket, include a link to the make/flow post in the description.  On the make/flow post, add a link to the ticket in a comment and tag the post with the ticket number. This cross-links the post and the ticket.

### Visual Record

Visual bug reports usually deal with one particular screen. A [visual record (vizrec)](https://make.wordpress.org/test/glossary/#visual-record) follows a [flow](https://make.wordpress.org/test/glossary/#flow) across screens, snapshotting each screen and interaction. Vizrecs are most often expressed as captioned galleries. Captions provide narrative that glues the screenshots together. Captions also editorialize. Express your user experience in the captions.

### Tagging and Triaging a Visual Record

To tag a visual record, follow the visual bug report tagging process for each screenshot in the record. Create tickets as needed for every issue noted in the visual record. Cross-link the tickets with the visual record via comments. Visual records often cross multiple components. Add a tag for each component. Finally, tag all visual records with [visual-record](https://make.wordpress.org/test/tag/visual-record/). We’ve been very inconsistent with using the visual-record tag. Since so many posts are visual records, it has become an untagged default.

For the visual record “[Customize, Menus: menu customizer, iPhone 6+](https://make.wordpress.org/test/2015/06/04/menu-customizer-iphone-6/)“, the tags are 32733, customize, ios, keyboard-flyup, menus, phablet, and visual-record. “customize” and “menus” are the relevant [components](https://make.wordpress.org/core/components/), which are also used to prefix the post title. “ios” is the platform. “phablet” is the device. “keyboard-flyup” is a common usability bug evidenced in the vizrec. “32733” is the number of a ticket opened for a visual bug shown in the vizrec. [#32733](https://core.trac.wordpress.org/ticket/32733) is cross-linked with the make/flow post via a [comment on the ticket](https://core.trac.wordpress.org/ticket/32733#comment:22) and a [comment on the post](https://make.wordpress.org/test/2015/06/04/menu-customizer-iphone-6/#comment-828).  All make/flow posts related to 32733 are accessible via [make/flow/tag/32733](https://make.wordpress.org/test/tag/32733/).

### Visual Survey

A visual survey is a collection of screenshots for a like set of screens or interfaces, such as all list table screens or all toolbar incarnations across various devices. These screens are captured as captioned galleries the way visual records are but are not presented in the context of a particular flow.

https://make.wordpress.org/test/tag/visual-survey/

### Flow Comparison

When an existing feature changes or is replaced, a flow comparison visual record is made to compare flow through the old interface with flow through the new interface. Seeing two flows side-by-side helps determine whether the new interface actually flows better.

https://make.wordpress.org/test/tag/flow-comparison/

### Visual History

A visual history shows the evolution of an interface over time and across releases.

https://make.wordpress.org/test/tag/visual-history/
