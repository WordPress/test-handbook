# Get Set Up for Testing

Welcome to the WordPress Test Team! Contributing to testing is one of the most impactful ways to help make WordPress better for everyone. Whether you have 10 minutes or several hours, there is a testing task suited to your setup and skill level.

## What Would You Like to Test?

Testing in the WordPress project covers several areas. Choose the section that matches your interests:

- **[WordPress Core](#test-wordpress-core)** – Patches, tickets, and automated test suites for WordPress core.
- **[Gutenberg / Block Editor](#test-gutenberg)** – Features and releases from the Gutenberg plugin.
- **[Calls for Testing](#calls-for-testing)** – Curated, focused testing tasks published by the Test Team.

## Test WordPress Core

WordPress core development happens in the [`wordpress-develop`](https://github.com/WordPress/wordpress-develop) repository. Core tickets live on [Trac](https://core.trac.wordpress.org/). The guides below will walk you through setting up and contributing to core testing.

### Step 1 – Set Up a Testing Environment

Before testing core tickets, you need an environment where you can apply patches. There are two approaches:

| Option | Best For |
|---|---|
| **WordPress Playground** (browser-based) | Quick visual verification of a PR; no local install needed |
| **Local development environment** (Docker-based) | Running automated tests, applying `.patch` and `.diff` files, complex testing |

👉 **[Set Up a Testing Environment](https://make.wordpress.org/test/handbook/get-setup-for-testing/set-up-a-testing-environment/)**

### Step 2 – Apply and Test a Patch

Once your environment is ready, pick a ticket to test:

- **[Test Core Tickets with Playground](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-playground/)** – Use this for tickets linked to a GitHub Pull Request (PR). No local setup required. *(Note: `.patch` and `.diff` files from Trac are not supported in Playground.)*
- **[Test Core Tickets with Grunt](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-grunt/)** – Use this to apply `.patch` and `.diff` files from Trac, or patches from GitHub Pull Requests, to your local environment.

### Step 3 – Run Automated Tests

After applying a patch, running the automated test suites helps catch regressions before code is merged. Ensure you have completed Steps 1 and 2 above — automated tests require a local environment with a patch already applied.

👉 **[Run Automated Tests](https://make.wordpress.org/test/handbook/get-setup-for-testing/run-automated-tests/)**

### Finding Tickets to Test

A great place to start is the [Needs Patch Testing](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing+has-patch&focuses=!docs&col=id&col=summary&col=focuses&col=keywords&col=owner&col=type&col=priority&col=changetime&desc=1&order=changetime) queue on Core Trac. These are tickets with patches that need a fresh set of eyes.

## Test Gutenberg

The Gutenberg plugin ships block editor features before they land in WordPress core. You can test pre-release versions of Gutenberg in a few ways:

### Install Gutenberg as a Plugin

Use this option to test the latest beta or release candidate of Gutenberg on an existing site:

1. Go to [https://github.com/WordPress/gutenberg/releases](https://github.com/WordPress/gutenberg/releases).
2. Download the latest `gutenberg.zip` file.
3. Go to **WP Admin → Plugins → Add New → Upload Plugin**.
4. Select the file and follow the prompts to install and activate.

### Run Gutenberg Locally

Use this option if you want to test pull requests or work with the bleeding-edge development version:

1. Make sure you have [git](https://git-scm.com), [Node.js](https://nodejs.org) (v20+), and [npm](https://www.npmjs.com/get-npm) (v10+) installed.
2. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
3. Fork and [clone](https://help.github.com/articles/cloning-a-repository/) the [gutenberg](https://github.com/WordPress/gutenberg) repository locally.
4. Run `npm install` to install dependencies.
5. Run `npm run dev` to build Gutenberg in development mode (continuous rebuild on file changes).
6. Make sure Docker is running, then start the local WordPress environment: `npm run wp-env start`.
7. Open [http://localhost:8888](http://localhost:8888) in your browser (username: `admin`, password: `password`).

The Gutenberg plugin will be installed and activated automatically in the local environment.

**Resources:**
- [Getting Started with Code Contribution](https://developer.wordpress.org/block-editor/contributors/code/getting-started-with-code-contribution/) – Block Editor Handbook
- [Testing Overview](https://developer.wordpress.org/block-editor/contributors/code/testing-overview/) – Block Editor Handbook

## Calls for Testing

The WordPress Test Team regularly publishes **Calls for Testing** — focused tasks that guide testers through specific features or bug fixes. These posts include step-by-step instructions and are a great starting point for new contributors.

👉 **[View all Calls for Testing](https://make.wordpress.org/test/category/call-for-testing/)**

Recent examples include:

- [It's time to test real-time collaboration!](https://make.wordpress.org/test/2026/03/11/its-time-to-test-real-time-collaboration/) *(March 2026)*
- [Call for Testing – Pattern editing and content-only interactivity in WordPress 7.0](https://make.wordpress.org/test/2026/02/27/call-for-testing-pattern-editing-and-content-only-interactivity-in-wordpress-7-0/) *(February 2026)*
- [Help Test WordPress 7.0](https://make.wordpress.org/test/2026/02/20/help-test-wordpress-7-0/) *(February 2026)*

## Get Involved

- **Join the conversation:** Testing discussions happen in the [#test](https://make.wordpress.org/chat/) channel on the WordPress Slack.
- **Weekly meetings:** Check the [Make/Test calendar](https://make.wordpress.org/meetings/#test) for meeting times.
- **Stay updated:** Follow the [Make WordPress Test blog](https://make.wordpress.org/test/) for announcements and testing posts.

Thank you for helping test WordPress! 🎉
