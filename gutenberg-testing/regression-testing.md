# Pre-release Testing

> **Note:** This page is a stub and needs improvement. If you would like to help improve it or notice an error, please say hello in [#core-test](https://wordpress.slack.com/messages/core-test/) on [WordPress Slack](https://make.wordpress.org/chat/).

**Regression testing**, or **pre-release testing**, is the practice of running functional tests to ensure that previously developed and tested features still work after a change.

A good time to help check for regressions is just before a new version is released.

## General Test Cases for Gutenberg

1. Test the inserters (top toolbar, sibling, default block, slash inserter).  
2. Edit the Gutenberg demo post.  
3. Add every kind of block you can find and make sure each works as expected.  
4. Paste in content from other sources.  
5. Undo/redo.  
6. Preview.  
7. Change each option in **Settings → Document**.  
8. Try each option in the **More menu** in the top toolbar.  
9. Check that the **Content Structure (i)** button works properly.  
10. Drag and drop different kinds of media into a post.  
11. Make changes to each of the panels in the pre-publish panel.  
12. Publish a post.  
13. Schedule a post.  
14. Submit a post for review (contributor role).  
15. Create a post with a ton of content (see [gutenberg-document-library](https://github.com/WordPress/gutenberg/tree/trunk/docs/document-library)).  
16. Consider adding an [automated test](https://github.com/WordPress/gutenberg/blob/master/docs/reference/testing-overview.md) for one of these cases [(if it doesn’t already exist)](https://github.com/WordPress/gutenberg/tree/master/test/e2e/specs).

## What Else?

The current focus for the testing contributor group is **Gutenberg**, and we will expand to other areas after Gutenberg is merged into core WordPress.
