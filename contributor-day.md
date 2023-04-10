# Get Started at Contributor Day

For more information about the role Test Team members play in the WordPress project, see the [Test Team Handbook homepage](https://make.wordpress.org/test/handbook/).

## Prepare for Contributor Day
In order to make the most of your time meeting and working with fellow contributors, follow these helpful **pre-Contributor Day** tips!

<div class="callout callout-info">
Did you know? Your [WordPress.org profile](https://profiles.wordpress.org/) displays your WordPress.org, Slack, and GitHub user info, as well as any [profile badges](https://make.wordpress.org/meta/handbook/tutorials-guides/profile-badges/) you've earned.
</div>

### Accounts Setup
1. [Required] Set up a WordPress.org account on the [account registration page](https://login.wordpress.org/register). If you get stuck, check out the [Learn WordPress lesson plan covering this topic](https://learn.wordpress.org/lesson-plan/creating-a-wordpress-org-account/) for guidance. And for users who already have a WordPress.org account, make sure you can still [log in](https://login.wordpress.org/) if it's been a while.
2. [Recommended] Join the conversation on [WordPress Slack](https://make.wordpress.org/chat/) (must be logged on to WordPress.org). While Slack is not required for Contributor Day participation, it connects you directly with the talented and diverse community behind WordPress.
3. [Optional] For users who intend to work with the [Gutenberg plugin](https://github.com/wordpress/gutenberg) or test PRs (pull requests), having a GitHub account is very helpful. You can [sign up for GitHub here](https://github.com/signup).

### Local Test Environment
**Local environment testing is suggested for past contributors, or users with prior development experience.**

Perhaps the biggest challenge faced by new contributors is preparing a test environment. If you would like to test patches and PRs directly during Contributor Day, it is **highly recommended** that you set things up at home *before* the event.

<div class="callout callout-tip">
Tip: Wifi at the venue during a busy Contributor Day can be slow and unreliable, and configuring your laptop can take a lot (if not all) of your time. Don't wait to fork the [`wordpress-develop` repository](https://github.com/WordPress/wordpress-develop) or [download Docker](https://docs.docker.com/get-docker/) at the event, as this drain on bandwidth also impacts other contributors.
</div>

Differences between operating systems and personal workflows make environment configuration beyond the scope of this article, but here are some links to get started on a local test/dev environment:

- [Installing a Local Server](https://make.wordpress.org/core/handbook/tutorials/installing-a-local-server/): setting up Docker, Local, etc.
- [Installing WordPress Locally](https://make.wordpress.org/core/handbook/tutorials/installing-wordpress-locally/): setting up WordPress using Git, SVN, or from a zip file.
- [Get Set Up for Testing](https://make.wordpress.org/test/handbook/get-setup-for-testing/): environment setup for Gutenberg plugin PR testing.
- [Apply a Patch from the Command Line](https://make.wordpress.org/core/handbook/tutorials/working-with-patches/#apply-a-patch-from-the-command-line) or [Download a GitHub PR](https://make.wordpress.org/core/handbook/tutorials/working-with-patches/#download-a-github-pull-request): common ways to test patches from Trac and GitHub.

If you need help setting up your environment, reach out on [Make/Test Slack](https://wordpress.slack.com/archives/C03B0H5J0) and there will be other contributors who can provide additional guidance.

### Browser-Only Testing
**Browser-based testing is suggested for users who have not contributed to WordPress before.**

If you prefer to test using a browser only -- a good option if you have joined Contributor Day at the last minute! -- then you might consider using [gutenberg.run](http://gutenberg.run), [WordPress Playground](https://developer.wordpress.org/playground/), or a service like [InstaWP](https://instawp.com) or [TasteWP](https://tastewp.com).

### Plugins for Testing
These plugins may be helpful, or even required, during testing sessions:

- [Gutenberg](https://wordpress.org/plugins/gutenberg/)
- [WordPress Beta Tester](https://wordpress.org/plugins/wordpress-beta-tester/)
- [Debug Bar](https://wordpress.org/plugins/debug-bar/)
- [Query Monitor](https://wordpress.org/plugins/query-monitor/)

Note that some tickets/PRs may include additional plugin requirements.

## Test Table at Contributor Day
Contributor Day has arrived! Look for the table with the "Core: Test" or "Test" placard, find a seat, and don't be afraid to introduce yourself. And most importantly: have fun collaborating with other contributors!

### Test Table Leads
Table leads are volunteers who have taken on the responsibility of helping steer and answer questions from other Contributor Day attendees. Make sure that other attendees know they can come to you for help.

If you're lucky, there will be other contributors at the table when the session begins, but don't be surprised if others trickle in (or leave) during the day. Remember that not everyone signs up for a team/table before the event, so you might end up [steering them elsewhere](https://make.wordpress.org), or pitching them on why the Test Team is so cool 😎.

To kick things off, here are some suggestions:

- Introduce the table leads to clarify who to reach out to for help.
- Go around the table and ask everyone else to introduce themselves.
- Good icebreaker questions:
	- Where are you from/how far did you travel?
	- How do you use WordPress?
	- Have you contributed before, and what interests you most about contributing?

### Slack/Coordination
[Recommended] After doing IRL introductions, consider posting a short note in the [#core-test channel](https://wordpress.slack.com/archives/C03B0H5J0) to let the Slack community know that a Contributor Day event is underway. Here is a great example [Slack thread for WC Asia 2023 Contributor Day](https://wordpress.slack.com/archives/C03B0H5J0/p1676600490483579).

Slack can be a good way to connect with remote attendees, many of which can help answer questions and collaborate with testing. Everyone at the event and remote should be invited to keep in touch online.

<div class="callout callout-tip">
Tip: While it's not required to run/mirror table collaboration in Slack, it does provide a very convenient way to record participation, as well as share the inevitable Trac query and GitHub PR links with other participants.
</div>

### Remote Attendance
Not everyone can make it to Contributor Day, but Test table attendees are encouraged to invite remote participation. The Test table lead should make every effort to keep remote Slack attendees up to date, or assign another volunteer at the table to handle these communications.

If you show up as a remote attendee on the [#core-test channel](https://wordpress.slack.com/archives/C03B0H5J0), make sure to let everyone know you're there for Contributor Day.

### Community Building
And finally, perhaps the most important part of attending Contributor Day is being able to connect with each other as individuals. Take the time to get to know each other, and foremost, have fun!

## How to Contribute
The [Test Team's "duty of care"](https://make.wordpress.org/test/handbook/#duty-of-care) covers all forms of testing in the WordPress project, whether manual or automated, from the core software to Gutenberg to other teams. This provides many options for involvement at Contributor Day.

### Repro and Patch Testing
The most popular activity for Test table participants is usually...**testing!** Core's official [Bug Reports page](https://make.wordpress.org/core/reports/) is a good place to start, but here are some other themed examples of testing opportunities:

- Key features from the latest major release, e.g. https://make.wordpress.org/test/2023/02/07/help-test-wordpress-6-2/.
- Focus on a particular beta or RC release, e.g. https://wordpress.org/news/2023/03/wordpress-6-2-release-candidate-1/.
- Features or updates highlighted in recent [Core Dev Notes](https://make.wordpress.org/core/tag/dev-notes/).
- Gutenberg [issues that need testing](https://github.com/WordPress/gutenberg/issues?q=is%3Aissue+is%3Aopen+label%3A%22Needs+Testing%22+) (e.g. reproduction testing), or [PRs that need testing](https://github.com/WordPress/gutenberg/pulls?q=is%3Apr+is%3Aopen+label%3A%22Needs+Testing%22).
- Triage [Trac tickets opened in the past 2 weeks](https://core.trac.wordpress.org/query?status=new&focuses=!docs&time=2weekago..&component=!Build%2FTest+Tools&keywords=~-reporter-feedback+-close+-dev-feedback+-2nd-opinion+-needs-refresh+-needs-design+-needs-design-feedback&milestone=Awaiting+Review&owner=&type=defect+(bug)&col=id&col=summary&col=focuses&col=keywords&col=changetime&order=changetime).
- Triage "ancient" tickets, like in this proposal: https://make.wordpress.org/core/2023/01/24/proposal-old-tickets-trac-triage-sessions/.
- Any testing you think is fun, like [tickets about cropping that need testing](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing&description=~crop&col=id&col=summary&col=status&col=owner&col=type&col=priority&col=milestone&order=priority). Go wild!

Finally, don't forget to post a clear [test report](https://make.wordpress.org/test/handbook/test-reports/) as a new comment on the tested issue ticket or patch PR.

### Documentation
Handbook articles (like the one you're reading now) are the result of numerous hours of collaboration effort from Test contributors, and benefit current and new Test Team members alike.

If you have at least a basic understanding of Test Team procedures (or are willing to learn about them), and you enjoy moderately-technical writing, please consider opening a PR for [one of the documentation issues in the Test Handbook repo](https://github.com/WordPress/test-handbook/issues).

## Test Contributor Profile Badge
Contributors who provide a meaningful contribution to Test Team, such as a reproduction or patch test report, submit unit tests, or open a PR for a documentation update, will be awarded a shiny [Test Contributor profile badge](https://make.wordpress.org/meta/handbook/tutorials-guides/profile-badges/).

If during your participation in Contributor Day you were unable to post a traceable contribution (i.e. something that can be shared in a URL), speak with your table lead before the day is through and share how you contributed to the team.

## Resources for Continued Contribution
Here are some commonly shared links that are helpful for Test Team contributors:

- [Test Handbook](https://make.wordpress.org/test/handbook/): the Test Team's reference manual.
- [Trac New User Quick Start Guide](https://make.wordpress.org/core/handbook/tutorials/trac/new-user-quick-start/): overview of WordPress's bug tracking system, [Trac](https://core.trac.wordpress.org/).
- [Test Reports](https://make.wordpress.org/test/handbook/test-reports/): guidelines for preparing great test reports.
- [Contribute with Testing](https://make.wordpress.org/core/handbook/testing/): the Core Team's test contribution content.
- [FAQ for New Contributors](https://make.wordpress.org/core/handbook/tutorials/faq-for-new-contributors/): common questions from the Core Handbook.
- [Reporting Bugs](https://make.wordpress.org/core/handbook/testing/reporting-bugs/): not testing *per se*, but a good checklist for testers who find bugs.
- [Reporting Security Vulnerabilities](https://make.wordpress.org/core/handbook/testing/reporting-security-vulnerabilities/): special reporting considerations for security issues.
- [Bug Gardening](https://make.wordpress.org/core/handbook/testing/bug-gardening/): a good resource for triage work.
- [Test Team Meetings](https://make.wordpress.org/meetings/#test):  schedule for upcoming chat and triage in the [#core-test channel](https://wordpress.slack.com/archives/C03B0H5J0).
