# Test Core Tickets with Playground

[WordPress Playground](https://playground.wordpress.net/) is an online platform that lets you experiment and learn about WordPress without affecting your live website. It’s a virtual sandbox where you can test features, designs, and settings in a safe and controlled environment. More About WordPress Playground can be read [here](https://wordpress.github.io/wordpress-playground/). 

## How to Test Core Tickets with Playground

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

There are some limitations to this Playground environment. You can read more [here](https://wordpress.github.io/wordpress-playground/developers/limitations/).

- All changes will be lost when a tab is closed with a Playground instance.
- All changes will be lost when refreshing the page.

In the WordPress Playground environment you can test the PR for the feature changes, bug fixes, regression issues and more.

## How to Configure Playground Using Query API Parameters

If you prefer a video walkthrough, you may follow along with this [video guide](https://www.youtube.com/watch?v=9q6unIg_Pto) as you work through the instructions below.

WordPress Playground exposes a simple API that you can use to configure the Playground in the browser.

It works by passing configuration options as query API parameters to the Playground URL.

For example, to install the Test Reports plugin, you would use the following URL:

`https://playground.wordpress.net/?plugin=test-reports`

<img src="https://make.wordpress.org/test/files/2026/04/test-reports-plugin-playground.webp" alt="Test Reports plugin installed via query parameters in Playground" style="max-width: 100%">

Similarly, by adding multiple query API parameters to the URL, you can initiate the custom Playground environment you need for testing a particular ticket.

Here are some of the parameters you can use:

- `php=8.5` - To test with a specific PHP version.

- `wp=trunk` - Normally we test with `trunk` but this can be set to specific WP version such as `6.9` or set to `beta` for the latest beta version.

- `gutenberg-branch=trunk` - To set the gutenberg branch.

- `multisite=yes` - To enable multisite.

- `core-pr=12345` - To apply a pull request patch for Core.

- `gutenberg-pr=12345`  - To apply a pull request patch for Gutenberg.

For example, to initiate the Playground with WordPress 6.9 and PHP 8.5 you would use:

`https://playground.wordpress.net/?wp=6.9&php=8.5`

<img src="https://make.wordpress.org/test/files/2026/04/playground-query-api-params-combination-scaled.webp" alt="Multiple Query API parameters for Playground" style="max-width: 100%">

## How to Install and Configure Playground CLI

WordPress Playground CLI is a potential replacement for the current Docker instance for testing purposes within the Wordpress Core development scope.

You may follow along with this [video guide](https://www.youtube.com/watch?v=-O8oubXyhUg) as you work through the setup instructions below.

Steps instructions:

1. Ensure you have [WordPress Develop](https://github.com/WordPress/wordpress-develop) repository locally cloned.
2. Using your computer's terminal, access the folder of this repository.
3. Inside this folder, run `npm install` and then `npm run build`.
4. Finally, run the long `npx` command below:

```bash
npx @wp-playground/cli@latest server \
  --mount-before-install=./build:/wordpress \
  --wordpress-install-mode=install-from-existing-files-if-needed \
  --login \
  --site-url=http://localhost:9400 \
  --mount=./src/wp-content/plugins:/wordpress/wp-content/plugins
```
<img src="https://make.wordpress.org/test/files/2026/04/playground-cli-in-terminal-scaled.webp" alt="Run PlayGround CLI in Terminal" style="max-width: 100%">

5. Your WordPress instance should now be accessible at: `http://localhost:9400`

<img src="https://make.wordpress.org/test/files/2026/04/playground-cli-in-browser-scaled.webp" alt="WordPress Playground running locally on port 9400" style="max-width: 100%">

6. Optionally, consider creating an alias for this long command in your terminal, so that you don't need to remember and type it every time. 

### How to Create Alias in MacOS

```bash
alias wpplay='npx @wp-playground/cli@latest server \
  --mount-before-install=./build:/wordpress \
  --wordpress-install-mode=install-from-existing-files-if-needed \
  --login \
  --site-url=http://localhost:9400 \
  --mount=./src/wp-content/plugins:/wordpress/wp-content/plugins'
```

Then reload your config with one of the following commands:

`source ~/.zshrc` if you are using Zsh or `source ~/.bashrc` if you are using Bash. Now you can just run `wpplay` from your terminal.

Here, instead of `wpplay` you can choose any name that you can easily remember for your alias.

### How to Create Alias in Windows PowerShell

PowerShell doesn't have alias for multi-line commands. So, you need a function. Add this to your PowerShell profile (`$PROFILE`):

```powershell
function wpplay {
  npx @wp-playground/cli@latest server `
    --mount-before-install=./build:/wordpress `
    --wordpress-install-mode=install-from-existing-files-if-needed `
    --login `
    --site-url=http://localhost:9400 `
    --mount=./src/wp-content/plugins:/wordpress/wp-content/plugins
}
```

Note the backtick ` instead of \ for line continuation.

Then reload with `. $PROFILE`

## Resources
- [WPContrib WordPress Test Contributor Pathway YouTube Channel](https://www.youtube.com/@WPContrib) by [@SirLouen](https://profiles.wordpress.org/sirlouen/)
- [WordPress Playground Docs](https://wordpress.github.io/wordpress-playground/)
- [Playground CLI Docs](https://wordpress.github.io/wordpress-playground/developers/local-development/wp-playground-cli/)
- [PowerShell Docs for Setting Alias](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias)
- [SS64 Docs for Setting Aliases and Macros](https://ss64.com/)