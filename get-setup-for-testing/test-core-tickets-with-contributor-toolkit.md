# Test Core Tickets with the Contributor Toolkit

The [WordPress Contributor Toolkit](https://wordpress.github.io/contributor-toolkit/) is a desktop app for macOS (Apple Silicon), Windows, and Linux. It sets up a local WordPress core development site with nothing else installed: no Git, Node.js, npm, or Docker.

Use it to reproduce a bug or to test a GitHub Pull Request (PR) or a `.diff` or `.patch` file from Trac. This page covers those testing steps. For everything else the app does, see the [Contributor Toolkit user guide](https://wordpress.github.io/contributor-toolkit/guide/getting-started).

## When to Use the Contributor Toolkit

- You need to test a `.diff` or `.patch` file, which [Playground](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-playground/) does not support, and you don't want to set up Docker.
- You want a site that keeps its data between testing sessions.

WordPress runs on SQLite in this app, and the app does not include a MySQL server. If a ticket depends on MySQL behavior, use a [local environment with Docker](https://make.wordpress.org/test/handbook/get-setup-for-testing/set-up-a-testing-environment/) instead.

## Set Up the App

Creating your first site downloads a lot of files. If you are preparing for a [Contributor Day](https://make.wordpress.org/test/handbook/contributor-day/), set it up at home first.

1. Download the file for your system from the [latest release](https://github.com/WordPress/contributor-toolkit/releases/latest) and open it. If macOS blocks the app, see [Troubleshooting](https://wordpress.github.io/contributor-toolkit/guide/troubleshooting#macos-blocks-the-app-from-opening).
2. Click **Create site**, enter a site name, choose **WordPress Core** as the project, choose a location, and click **Create site** again.
3. Wait for the setup to finish. The app downloads the repository, installs the dependencies, and runs the first build by itself.
4. Click **Start dev server and finish the wizard**. Your site's URL and a **wp-admin** link appear in the app when the server is ready.

## Link a Trac Ticket

1. In the **Trac ticket** panel, type the ticket number or paste its URL.
2. Click **Link ticket**. The ticket gets its own branch inside the site, so you don't need a new site for each ticket.

As an optional shortcut, the [WP Trac Triager](https://chromewebstore.google.com/detail/wp-trac-triager/fhlhkchpljijkhhmichmfdhedangngol) Chrome extension adds an **Open in Contributor Toolkit** button to the Trac ticket page. The app then asks whether to link the ticket to the site you have open.

## Reproduce a Bug

1. Choose **Update to latest trunk** from the site menu so that you are testing current code.
2. Link the ticket, and don't apply a patch or PR.
3. Follow the steps in the ticket on your site.
4. Look for the problem in the app as well as on the site:
    - The [debug.log tab](https://wordpress.github.io/contributor-toolkit/guide/logs-and-debugging) shows PHP errors, warnings, and notices.
    - [Adminer](https://wordpress.github.io/contributor-toolkit/guide/database) shows what is in the database.
    - The [Mail panel](https://wordpress.github.io/contributor-toolkit/guide/mail) shows emails the site tried to send. They never leave your computer.
5. Share your results in an [Issue Reproduction](https://make.wordpress.org/test/handbook/test-reports/issue-reproduction/) report.

## Test a Patch or PR

1. Choose what to test:
    - **A PR:** click **Apply…** next to a PR listed on the ticket, or enter the PR's URL or number in the **Apply a patch or PR** panel and click **Apply PR**.
    - **A patch file from Trac:** click **Show Trac attachments**, then click **Apply…** next to the file. If Trac shows an "I am human" checkbox, click it once.
2. Review the list of changed files, then click **Apply and rebuild**.
3. Wait for the rebuild to finish, then test the change on your site.
4. Share your results in a [Patch Testing](https://make.wordpress.org/test/handbook/test-reports/patch-testing/) report. Under **Environment**, list SQLite as the database.
5. Click **Revert this PR** or **Revert this patch** to go back before you test something else. A branch can have only one patch file applied at a time.

If a patch file doesn't apply, the app changes nothing and lists the parts that no longer fit. For more detail, see [Applying patches and PRs](https://wordpress.github.io/contributor-toolkit/guide/applying-patches).

## Automated Tests

This page doesn't cover automated tests. To run them, see [Run Automated Tests](https://make.wordpress.org/test/handbook/get-setup-for-testing/run-automated-tests/).
