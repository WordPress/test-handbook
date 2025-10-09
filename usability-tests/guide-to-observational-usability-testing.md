# Guide to Observational Usability Testing

## Introduction
Observational usability testing is a method where testers watch real users interact with WordPress features or workflows to uncover usability issues.  
Unlike automated testing or surveys, this approach focuses on observing behavior — what users actually do — rather than what they say.  
It’s one of the most effective ways to discover real-world pain points and make WordPress more intuitive for everyone.

## Why Observational Testing Matters
Observing users helps contributors and designers:
- Identify barriers that users face while performing common WordPress tasks.
- Understand how new features impact accessibility and discoverability.
- Bridge the gap between developer assumptions and user expectations.
- Build empathy with diverse users, including those with varying levels of technical skill.

By conducting observational usability testing, contributors can gather actionable insights to improve the overall user experience in WordPress.

## Planning Your Test
Before you begin, take time to plan your usability study carefully.

1. **Define your objectives**  
   What are you testing? For example, onboarding, creating a post, managing plugins, or using a new feature in the block editor.

2. **Select participants**  
   Choose users who reflect your target audience. Aim for diversity — from beginners to advanced users.

3. **Create test tasks**  
   Prepare realistic, goal-oriented tasks. For example:  
   > “Add an image to a post and align it to the right.”

4. **Set up the environment**  
   - Ensure you have a stable testing environment (e.g., local WordPress site or staging setup).  
   - Prepare tools for screen sharing and recording (with participant consent).  
   - Check accessibility tools if testing with assistive technologies.

## Conducting the Test
1. **Start with a short introduction**  
   Explain that you’re testing the software, not the participant. Make them comfortable and encourage open feedback.

2. **Encourage think-aloud behavior**  
   Ask participants to verbalize what they are thinking while using WordPress. This gives valuable context behind their actions.

3. **Observe silently**  
   Watch carefully for:
   - Moments of hesitation or confusion  
   - Unexpected navigation choices  
   - Misinterpretation of labels or instructions  
   - Emotional reactions (frustration, delight, satisfaction)

4. **Avoid interference**  
   Don’t assist too quickly. Let the participant work through the challenge — this reveals usability friction points.

5. **Take detailed notes**  
   Note timestamps, user quotes, and observed issues for later analysis.

## Analyzing Results
After your testing sessions:
1. Review notes, recordings, and transcripts.  
2. Identify recurring issues and categorize them (navigation, labeling, accessibility, etc.).  
3. Prioritize problems based on **severity** and **frequency**.  
4. Summarize findings in a short report, including:
   - Key observations  
   - Screenshots or short clips (if available)  
   - Recommended improvements  
5. Share insights in the relevant WordPress teams (e.g., Core, Design, Accessibility) using appropriate Slack channels or Make posts.

## Tips and Best Practices
- Test with at least **5 participants** to uncover most usability issues.  
- Keep sessions concise (20–40 minutes).  
- Always get **informed consent** before recording.  
- Be neutral — don’t influence user behavior with hints or feedback.  
- Respect privacy and avoid storing personally identifiable data.  
- Combine findings with other feedback sources (support forums, surveys, etc.) for stronger insights.

## Example Scenario
A contributor team wants to understand how new users interact with the Site Editor.  
They plan 5 remote observational tests, each 30 minutes long.  
Participants are asked to:
1. Open the Site Editor.  
2. Change the site title and update the navigation menu.  
3. Add a new block and save changes.  
During the session, observers note confusion around the “Templates” section and unclear labeling in block settings — leading to actionable improvements in the next release.

## References
- [Nielsen Norman Group – How to Conduct Observational Studies](https://www.nngroup.com/articles/observational-study/)  
- [GitHub Design Research Guide](https://github.com/github/insights-research)  
- [WordPress Testing Handbook](https://make.wordpress.org/test/handbook/)  
- [WordPress Design Team – Usability Testing Resources](https://make.wordpress.org/design/tag/usability-testing/)  
- [Inclusive Usability Testing – W3C Guidelines](https://www.w3.org/WAI/test-evaluate/)
