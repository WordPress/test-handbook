# Test Chat Moderator Guide

This guide helps moderators run Test Team Chat meetings. Use the structure and example phrases below as a reference.

## Pre-Meeting Preparation

Before the meeting:
1. Review the [meeting agenda](https://make.wordpress.org/test/tag/test-chat-agenda/) published beforehand
2. Prepare any links or resources mentioned in the agenda
3. Have the Test Team Handbook open: [https://github.com/WordPress/test-handbook](https://github.com/WordPress/test-handbook)
4. Note the scheduled start and end time
5. Be ready to take notes or delegate note-taking

## Meeting Structure & Script

### 1. Opening / Welcome (Start Time)

**Announce meeting start:**
> /here Hey everyone! Please join us in #core-test for this week's Test Team chat.

_Or:_
> /here We are starting now today's <test-chat>

<div class="callout callout-info">
<code>/here</code> notifies only active/online members in the channel.
</div>

**Welcome message:**
> Hello and welcome to this bi-weekly test team chat meeting!

### 2. Attendance Check

**Request attendance:**
> Who is joining us today? Please reply in the thread:
> 1. Please say hello and note your WordPress.org profile username, as we will use this to record attendees in the notes.
> 2. Feel welcome to introduce yourself briefly and share a flag or your favorite emoji!

**Note about async participation:**
> If you're joining this chat **async**, please add your details to the thread later and include (async) after your name. This helps us review meeting times and encourage participation across all time zones.

### 3. Share Agenda

**Link to agenda:**
> Today's chat agenda can be found [here](https://make.wordpress.org/test/tag/test-chat-agenda/). Please take a look.

**Example links:**
- [https://make.wordpress.org/test/2026/01/21/team-chat-agenda-22nd-january-2026/](https://make.wordpress.org/test/2026/01/21/team-chat-agenda-22nd-january-2026/)
- [https://make.wordpress.org/test/2026/01/14/team-chat-agenda-14th-january-2026/](https://make.wordpress.org/test/2026/01/14/team-chat-agenda-14th-january-2026/)

### 4. Meeting Notes Announcement

**Declare meeting notes section:**
> **Meeting Notes**

**Identify facilitator:**
> Today's session facilitator and note-taker is **@[YOUR_USERNAME]**

_Or, if the roles are handled by different people:_
> Today's session facilitator is **@[FACILITATOR_USERNAME]** and the note-taker is **@[NOTE_TAKER_USERNAME]**

**Upcoming 4-Week Schedule (Optional):**

> 📅 **Upcoming 4-Week Schedule**
>
> * 12 February 2026 – Facilitator: @username1 | Note-taker: @username2
> * 26 February 2026 – Facilitator: @username3 | Note-taker: @username4
> * 12 March 2026 – Facilitator: (Open) | Note-taker: (Open)
> * 26 March 2026 – Facilitator: (Open) | Note-taker: (Open)
>
> 🙌 If you'd like to volunteer for any open slot, please reply in the thread.

### 5. Test Team Discussions

**Transition to main agenda:**
> Now let's move on to agenda item: **Test Team Discussions**

**For each agenda item:**

**Introduce the item:**
> - [AGENDA_ITEM_TITLE]

**Provide context (if needed):**
> [Brief explanation or context about the topic]

**Facilitate discussion:**
- Let participants share their thoughts
- Ask clarifying questions when needed
- Summarize key points
- Acknowledge contributions

**Transition between items:**
> Then I think we can move to the next item in the agenda:
> - [NEXT_AGENDA_ITEM]

**When discussion needs continuation:**
> Let's continue the conversation in the GitHub Issue and bring it back to another chat once there's more consensus on it.

**When wrapping up a discussion:**
> We can discuss this on GitHub and make the required changes accordingly.

### 6. Open Floor

**Time check (10 minutes before end):**
> 10min to end the meeting

**Transition to open floor:**
> Let's move to the **Open Floor**

**Invite contributions:**
> Does anyone have anything they'd like to share or discuss?

**If no responses:**
- Wait a reasonable amount of time (1-2 minutes)
- If still no responses, proceed to announcements

### 7. Announcements

**Transition to announcements:**
> Before we finish the meeting here you have a few links of relevant things that are happening in the WordPress Ecosystem and in the Test Team

_Or:_
> Let's now move on to the next agenda item: **WordPress Ecosystem Announcements**

#### A. WordPress Ecosystem Announcements

**Introduce section:**
> **WordPress Ecosystem Announcements**

**List announcements with links:**
> - [Gutenberg releases](https://make.wordpress.org/core/tag/gutenberg/)
> - [WordPress Latest News](https://wordpress.org/news/)
> - [Dev news](https://make.wordpress.org/core/tag/dev-notes/)

**Example announcements to include:**
- Gutenberg releases
- WordPress version releases and schedules
- PHP version support changes
- Major release schedules
- Developer news and resources
- Core team calls for volunteers

#### B. Test Team Announcements

**Introduce section:**
> **Test Team Announcements**

_Or:_
> next move to **Test Team Announcements**:

**List Test Team specific items:**
> - [Test Team Program Information](https://make.wordpress.org/test/2026/01/06/launch-information-for-the-test-team-training-program/)
> - [Week in Test Post](https://make.wordpress.org/test/category/week-in-test/): Brief description
> - [Test Team Update](http://make.wordpress.org/updates/tag/test/): Metrics for overall team progress

#### C. Call for Testing

**Introduce section:**
> **Call for Testing**

_Or:_
> next **Call for Testing**

**List testing needs:**
> - [Help Test WordPress X.X](https://make.wordpress.org/test/tag/release-field-guide/)
> - We have [Patch Testing Issues](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing+has-patch&focuses=!docs&col=id&col=summary&col=focuses&col=keywords&col=owner&col=type&col=priority&col=changetime&desc=1&order=changetime) that need testing

**Standard links:**
- Core Needs Testing: [https://core.trac.wordpress.org/tickets/needs-testing](https://core.trac.wordpress.org/tickets/needs-testing) (this report is slated to be deprecated and removed)
- Gutenberg Needs Testing: [https://github.com/WordPress/gutenberg/issues?q=state%3Aopen%20label%3A%22Needs%20Testing%22](https://github.com/WordPress/gutenberg/issues?q=state%3Aopen%20label%3A%22Needs%20Testing%22)

**Check for reactions:**
> Any comment about any of these resources?

### 8. Closing

**When ready to close:**
> As there are no more comments we can wrap up the meeting.

**Final closing message:**
> So this bring us to the end of our meeting </test-chat> thank you all for coming.

_Alternative:_
> And this bring us to the end of our meeting. Thank you all for coming.

## Moderator Tips

### During Discussions

- **Acknowledge all participants** - Thank people for their contributions and use their @username when responding.

- **Ask clarifying questions** - "Just to confirm, [restate]?" or "Is there any more context about this work?" or "Could you elaborate on [topic]?"

- **Summarize and capture action items** - "Noted. I'll [action item]" or "Sounds good, we can [next step]"

- **Keep discussions on track** - Gently redirect off-topic discussions. Suggest moving lengthy debates to GitHub. Be mindful of time.

- **Facilitate, don't dominate** - Allow space for others to speak. Encourage quieter participants. Balance the conversation.

### GitHub Integration

When discussions need follow-up:
- Suggest creating GitHub issues
- Reference the test-handbook repo
- Encourage PRs for concrete proposals
- Link to existing issues when relevant

**Common references:**
- Test Handbook: [https://github.com/WordPress/test-handbook](https://github.com/WordPress/test-handbook)
- Test Handbook Issues: [https://github.com/WordPress/test-handbook/issues](https://github.com/WordPress/test-handbook/issues)

### Time Management

- **Start on time** (scheduled time)
- **Typical meeting length:** 55-60 minutes
- **10-minute warning:** Announce time before Open Floor
- **End on time:** Respect participants' schedules

### Note-Taking

As facilitator, you should:
- Capture key discussion points
- Note action items and owners
- Record decisions made
- List attendees (from thread)
- Prepare meeting summary for publication

<div class="callout callout-tip">
Since meetings are conducted asynchronously in Slack, you can copy the entire meeting transcript and paste it into an AI client to help process and summarize the key points, action items, and decisions for publication.
</div>

### Common Situations

**If discussion gets detailed/technical:**
- Suggest moving detailed discussions to GitHub issues
- Remind participants that chat is for brainstorming, GitHub is for finalizing details
- Offer to create a GitHub issue to track the conversation

**If someone offers help:**
- Acknowledge their willingness to contribute
- Note their offer in the meeting notes
- Provide relevant links or resources they might need

**If clarification is needed:**
- Ask clarifying questions
- Restate the point to confirm understanding
- Summarize the discussion so far

**If moving to next topic:**
- Announce the transition
- Briefly reference the next agenda item
- Allow a moment for any final comments

## Post-Meeting Tasks

After the meeting:
1. Compile meeting notes from the discussion
2. Create GitHub issues as mentioned during meeting
3. Update calendar if schedule changes were discussed
4. Publish summary to make.wordpress.org/test if required
5. Follow up on action items assigned during meeting

## Quick Reference - Meeting Flow

1. Opening & Welcome (2-3 min)
2. Attendance Check (2 min)
3. Share Agenda (1 min)
4. Meeting Notes Declaration (1 min)
5. Test Team Discussions (30-40 min)
   1. Multiple agenda items
   2. Facilitate discussion for each
   3. Transition between items
6. Open Floor (5-10 min)
7. Announcements (5-8 min)
   1. WordPress Ecosystem
   2. Test Team
   3. Call for Testing
8. Closing (1-2 min)

**Total Duration:** ~55-60 minutes

## Resources & Links

### Essential Pages
- Make Test: [https://make.wordpress.org/test/](https://make.wordpress.org/test/)
- Test Handbook: [https://github.com/WordPress/test-handbook](https://github.com/WordPress/test-handbook)
- Test Handbook Issues: [https://github.com/WordPress/test-handbook/issues](https://github.com/WordPress/test-handbook/issues)
- Core Reports: [https://make.wordpress.org/core/reports/](https://make.wordpress.org/core/reports/)

### Regular Reports
- Month in Test: Published monthly at make.wordpress.org/test
- Test Team Update: Weekly metrics report
- Gutenberg Releases: Bi-weekly release announcements

## Example Full Opening Sequence

> [14:02] Moderator: /here Hey everyone! Please join us in #core-test for this week's Test Team chat.
>
> [14:02] Moderator: Hello and welcome to this bi-weekly test team chat meeting!
>
> [14:02] Moderator: Who is joining us today? Please reply in the thread:
> 1. Please say hello and note your WordPress.org profile username, as we will use this to record attendees in the notes.
> 2. Feel welcome to introduce yourself briefly and share a flag or your favorite emoji!
>
> [14:05] Moderator: If you're joining this chat **async**, please add your details to the thread later and include (async) after your name. This helps us review meeting times and encourage participation across all time zones.
>
> [14:06] Moderator: Today's chat agenda can be found [here](https://make.wordpress.org/test/tag/test-chat-agenda/). Please take a look.
>
> [14:07] Moderator: **Meeting Notes**
>
> [14:08] Moderator: Today's session facilitator and note-taker is **@YourUsername**
>
> [14:10] Moderator: Now let's move on to agenda item: **Test Team Discussions**
>
> [14:10] Moderator: - [First Agenda Item]