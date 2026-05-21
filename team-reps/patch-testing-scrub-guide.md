# Patch Testing Scrub Guide

This guide helps moderators run Patch Testing Scrub sessions. Use the structure and example phrases below as a reference to assign tickets to everyone in attendance.

## Pre-Session Preparation

Before the session:
1. Review and have Trac ticket queue open and ready ([Patch Testing Tickets](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing+has-patch&milestone=!Awaiting+Review&group=milestone&max=0&col=id&col=summary&col=status&col=milestone&col=owner&col=type&col=priority&order=priority)). Also, prepare a shortlist of tickets to assign
2. Check for any recent WordPress releases, beta releases or release candidates to announce
3. Note the scheduled start time and be prepared to monitor the thread throughout


## Session Structure & Script

### 1. Opening / Welcome (Start Time)

**Announce meeting start:**
> /here We are starting today's `<patch-testing-scrub>`

<div class="callout callout-info">
<code>/here</code> notifies only active/online members in the channel.
</div>

**Welcome message**
> Hello everyone 👋

**Share any relevant announcements (e.g. a new WordPress version, a beta release, a release candidate)**
> Before we start, [WordPress 7.0 RC 2](https://wordpress.org/news/2026/03/wordpress-7-0-release-candidate-2/) is now available for testing. Feel free to try it out and share your feedback.

**Invite Participant**
> If you're around, we'd love your help with testing and sharing reports.

**Call for testers**
> If you're ready to start patch testing, please reply in this thread so I can assign you a ticket. 🧵

### 2. Assigning Tickets

**When a participant replies and is ready to test**
> Thank you **@[YOUR_USERNAME]**, for joining us today. You can start working on **#[TICKET_NUMBER]**

**When assigning a follow-up ticket to someone already testing**
> **@[USERNAME]** Thank you for adding a report. You could give this a try **#[TICKET_NUMBER]**

<div class="callout callout-info">
Assign one ticket at a time per participant. Wait for them to reply or post a report before assigning a new one. Keep an eye on the thread throughout the session.
</div>

**Tips for choosing tickets**
- Prioritize tickets that have a numbered milestone (e.g. Milestone: 7.1) then Future release tickets.
- Match ticket complexity to the participant's experience level where possible.
- Avoid assigning the same ticket to two people simultaneously unless it needs multiple test environments.

### 3. Monitoring the Session
**Acknowledge test reports as they come in**
> Great work **@[USERNAME]**, thanks for the report!

**If a participant finishes early and wants another ticket**
> Thanks **@[USERNAME]**! Here's another one you can try: **#[TICKET_NUMBER]**

### 4. Closing

**When ready to wrap up**
> Well, this marks the end of today's `</patch-testing-session>`

**Reassure participants they can continue**
> Feel free to ping me if you need to comment on anything, and also if you have not finished with your patch testing, you can continue for as long as you want, and ping me if you have any trouble finishing.

**Thank all participants by their Slack username**
> Thanks **@[USERNAME1]**, **@[USERNAME2]**, and **@[USERNAME3]** for coming today. 🎉

## Quick Reference Meeting Flow

1. Opening & Welcome (2-3 min)
2. Assign Tickets (40-50 min)
3. Monitoring Session(ongoing throughout the session)
4. Closing (2-3 min)

**Total Duration:** ~55-60 minutes

## Moderator Tips

### Assigning & Tracking Tickets

- **Keep a running list** of who has been assigned which ticket.
- **Check reports promptly:** when  someone posts a test report, acknowledge it and offer a new ticket quickly to keep momentum going.
- **Have a backlog ready:** prepare more tickets than you expect to need so you're never scrambling for assignments.
- **Balance the queue:** try to have a mix of easy and complex tickets so participants of all experience levels can contribute.

### Encouraging Participation

- **Welcome newcomers warmly:** first-time testers may be nervous; a friendly acknowledgement goes a long way.
- **Use @usernames:** always mention participants by username so they feel seen and so the thread is easy to follow.

### Handling Common Situations

**If a participant is stuck on a ticket**
- Offer to help them tackle the ticket if you have the knowledge and expertise to test the ticket.
- If you are unable, you can offer to swap them to a different ticket.

**If a ticket has already been tested by someone else**
- Check whether a second test report would still be valuable.
- If not, assign a different ticket.

### Time Management

- **Start on time** (scheduled time)
- **Typical session length:** 55-60 minutes
- **Monitor the thread:** keep an eye on replies throughout
- **Close gracefully:** give a clear end message so participants know when the hosted portion is done, even if testing continues

## Resources & Links

### Essential Pages
- Trac Patch Testing query: [here](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing+has-patch&milestone=!Awaiting+Review&group=milestone&max=0&col=id&col=summary&col=status&col=milestone&col=owner&col=type&col=priority&order=priority)

## Example Full Opening Sequence

> [18.00] Moderator: /here We are starting today's `<patch-testing-scrub>`
>
> [18:02] Moderator: Hey everyone 👋
>
> [18:02] Moderator: Before we start, WordPress 7.0 RC 2 is now available for testing. Feel free to try it out and share your feedback.
>
> [18:02] Moderator: If you're around, we'd love your help with testing and sharing reports.
>
> [18:02] Moderator: If you're ready to start patch testing, please reply in this thread so I can assign you a ticket. 🧵
>
> [18:05] Moderator: Thank you @participant1, for joining us today. You can start working on #65007
>
> [18:08] Moderator: Thank you @participant2, for joining us today. You can start working on #65031
>
> [18:22] Moderator: Thank you @participant3, for joining us today. You can get started on #64762
>
> [18:35] Moderator: @participant3 Thank you for adding a report. You could give this a try #65005
>
> [19:00] Moderator: Well, this marks the end of today's `</patch-testing-session>`
>
> [19:00] Moderator: Feel free to ping me if you need to comment on anything, and also if you have not finished with your patch testing, you can continue for as long as you want, and ping me if you have any trouble finishing.
>
> [19:00] Moderator: Thanks @participant1, @participant3, and @participant2 for coming today.
