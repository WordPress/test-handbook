# Test Core Tickets with Playground

[WordPress Playground](https://wordpress.github.io/wordpress-playground/) is an online platform that lets you experiment and learn about WordPress without affecting your live website. It’s a virtual sandbox where you can test features, designs, and settings in a safe and controlled environment. More About WordPress Playground can be read [here](https://wordpress.github.io/wordpress-playground/). 

## How to Test Core Tickets with Playground?

1. Go to the Trac ticket and check that the ticket has a GitHub PR or a patch file. If a ticket has PR, you can test that trac ticket with Playground. If the Trac ticket has “.patch”. This automatic test environment will not work. 

    <a href="https://make.wordpress.org/test/files/2025/10/example-trac-ticket.png"><img src="https://make.wordpress.org/test/files/2025/10/example-trac-ticket.png" alt="Example Trac Ticket" style="max-width: 100%"></a>

2. Click on the ‘View PR’ button, it will open the respective GitHub PR as shown in the below screenshot.

    <a href="https://make.wordpress.org/test/files/2025/10/github-pull-request-example.png"><img src="https://make.wordpress.org/test/files/2025/10/github-pull-request-example.png" alt="GitHub Pull Request Example" style="max-width: 100%"></a>

3. On the PR comment thread, it will find the GitHub action default comment about ‘Test using WordPress Playground’ 

    <a href="https://make.wordpress.org/test/files/2025/10/github-test-using-playground.png"><img src="https://make.wordpress.org/test/files/2025/10/github-test-using-playground.png" alt="Test using WordPress Playground" style="max-width: 100%"></a>

4. You will find a link with the text ‘Test this pull request with WordPress Playground’. Click on this link. It will create a disposable WordPress website with the changes implemented in the PR. 

    <a href="https://make.wordpress.org/test/files/2025/10/creating-plaground-site-with-pr.png"><img src="https://make.wordpress.org/test/files/2025/10/creating-plaground-site-with-pr.png" alt="Creating Playground Site with PR" style="max-width: 100%"></a>

5. Click on the ‘Go’ button if the page doesn’t redirect automatically to the WordPress site. 

    <a href="https://make.wordpress.org/test/files/2025/10/playground-site-preparing.png"><img src="https://make.wordpress.org/test/files/2025/10/playground-site-preparing.png" alt="Playground Site Preparing" style="max-width: 100%"></a>

6. You will see a new WordPress site in your browser window.

    <a href="https://make.wordpress.org/test/files/2025/10/playground-site-with-pr.png"><img src="https://make.wordpress.org/test/files/2025/10/playground-site-with-pr.png" alt="Playground Site with PR" style="max-width: 100%"></a>

There are some limitations to this Playground environment. You can read more [here](https://wordpress.github.io/wordpress-playground/limitations).

- The Plugin and Theme Directories cannot be accessed within Playground (meaning you can not search plugin or theme from the search box).
- All changes will be lost when a tab is closed with a Playground instance.
- All changes will be lost when refreshing the page.
- A fresh instance is created each time the link below is clicked.
- Every time this pull request is updated, a new ZIP file containing all changes is created. If changes are not reflected in the Playground instance, it’s possible that the most recent build failed, or has not completed. Check the [list of workflow runs to be sure](https://github.com/WordPress/wordpress-develop/actions/workflows/wordpress-playground.yml).

In the new WordPress environment. You can test the PR for the feature changes, bug fixes, regression issues and more.
