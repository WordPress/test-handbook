# Guide to Observational Usability Testing

This is a short guide to help anyone who would like to run a usability test. No prior experience is assumed, so if you are new to usability testing, you may find the tips and tricks section at the end of this post useful. Happy testing!

## What is usability testing

[Usability testing](https://en.wikipedia.org/wiki/Usability_testing) is an umbrella term to describe various ways in which products can be tested with actual users. There are a number of techniques that can be used to conduct usability tests, each of them have different advantages and costs. In this guide, we will provide steps for conducting observational user tests.

In an observational user test, the moderator or person running the test, acts as a “fly on the wall”. In your role as moderator, your key function is to set up the conditions for the test to take place, observe participants performing their tasks, and interject only when the participant gets stuck.

When running an observational user test, the most important thing to remember is that… **the test is not really a test!** Setting the scene to make your participant feel comfortable to provide open and honest feedback is the key role of the moderator.

## Running an observational usability test

To moderate a usability test, you will need to follow a few simple steps:

1. **Set up your test environment:** a device (computer, laptop, mobile or tablet), a test participant and a fairly quiet location  
2. **Set up your device:** open two browser windows, the first will contain the test instructions and the second the Gutenberg editor  
3. **Set up your screen recording software:** record the mouse clicks and audio for each test session  
4. **Set up a place to upload your screen recordings:** after each test, save your [screen recording](https://make.wordpress.org/test/handbook/guide-to-screen-recording-for-usability-testing/) to a publicly accessible drive (such as dropbox, cloudup, Google drive) and paste the link into the test instructions  
5. **After each participant finishes, refresh (reset)** the two browser windows to ensure that each participant starts the test from the same baseline point  

## Tips and tricks for moderating a successful (and fun:) testing session

For those that are new to usability testing, and for those that have run hundreds of tests, there are a few tips and tricks that we have learned over the years that can help you to run a successful session.

### Don’t make the usability test a “test”

It’s quite unfortunate that usability tests are named as such. A “test” carries with it the gravitas that there is a right and a wrong answer – in practice, there are no right or wrong answers in usability testing. As a moderator, it’s really important to put your participant at ease, so that they feel safe to give honest feedback, rather than trying to provide you with the right answer.

A really simple way to do this is to just address this at the start of the session:

> “… this is not a test, there are no right or wrong answers. We are just really interested to hear your thoughts on …”

### Provide guidance without leading

In general, as the moderator your role is to listen and not talk. The only exceptions to this are to provide signals that your participant is doing a great job (note that this is not related to whether they are completing the task as expected or otherwise), and to gently steer the participant if they become unable to proceed with a task.

Signalling that your participant is doing well can be done by using phrases such as:

> “Right, yes…”  
> “OK, I see…”  
> “Yes…”

These small phrases will put the participant at ease, and shift their focus from trying to get the answers “right” to completing the task.

If your participant gets stuck, perhaps on something that is not related to the things you are testing for, or something that is still a work in progress and not the focus of the test, you will need to guide them gently back to the main task. You can do this by using a variation of this:

> “… I can see that you are struggling to get [the task] finished, and that’s totally fine… we are finding that most people are struggling on this, which is really valuable information for us as now we know what we need to change/fix to make our product better …”

Note how the above phrase both normalises their struggle (everyone is struggling, you are just like everyone else) and also shifts the responsibility to the design team, rather than making the participant feel like they are failing.

### Look for points of friction, not success

This tip is a little counter-intuitive. The real value of usability testing is that it can give us insight into the areas of a product’s design that can be improved. Product improvements often originate at the source of friction between the technology and the user. **As a moderator, you are doing a great job if you can find the sources of friction** – and not necessarily if your participant successfully completes a given task.

### Report what you saw, not how to solve

Reporting the outcomes of your usability tests can be quite exciting, especially when you have witnessed a number of participants display a recurring pattern of behaviour. When reporting back on your results, it is really important to **focus on telling us about what you saw only** – and not jump into providing possible solutions.

As an example, let’s say you tested ten participants, and observed that all of them struggled to find the settings button. That is exciting, and it is common for those new to usability testing to report this back as:

> “All participants tested (n=10) struggled to find the settings button. It is recommended that the button is changed to red (#F60044) to make it easier to find”

Instead of grouping the observed issue with the potential solution, separate these out. Report back only what you saw in the usability test questionnaire (or blog post if you write one):

> Report back: “All participants tested (n=10) struggled to find the settings button”

Next, [add an issue into GitHub](https://github.com/WordPress/gutenberg/issues) that describes the problem you discovered:

> Add issue to GitHub: “Improve discoverability of the settings button”

In the description of the issue, add links to your usability test report. This will provide evidence for why this issue is being raised. You can also at this stage add in your ideas for a potential solution.
