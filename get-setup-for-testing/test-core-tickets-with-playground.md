# Test Core Tickets with Playground

[WordPress Playground](https://playground.wordpress.net/) is an online platform that lets you experiment and learn about WordPress without affecting your live website. It is a virtual sandbox where you can test features, designs, and settings in a safe and controlled environment. Learn more in the [WordPress Playground documentation](https://wordpress.github.io/wordpress-playground/).

## How to Test Core Tickets with Playground

1. Go to the Trac ticket and check whether it has a GitHub pull request or a patch file. If the ticket has a pull request, you can test it with Playground. If the ticket only has a `.patch` file, this automatic test environment will not work.

    <a href="https://make.wordpress.org/test/files/2025/10/example-trac-ticket.png"><img src="https://make.wordpress.org/test/files/2025/10/example-trac-ticket.png" alt="Example Trac Ticket" style="max-width: 100%"></a>

2. Click the "View PR" button. It will open the related GitHub pull request as shown in the screenshot below.

    <a href="https://make.wordpress.org/test/files/2025/10/github-pull-request-example.png"><img src="https://make.wordpress.org/test/files/2025/10/github-pull-request-example.png" alt="GitHub Pull Request Example" style="max-width: 100%"></a>

3. In the pull request comment thread, find the GitHub Actions comment about "Test using WordPress Playground".

    <a href="https://make.wordpress.org/test/files/2025/10/github-test-using-playground.png"><img src="https://make.wordpress.org/test/files/2025/10/github-test-using-playground.png" alt="Test using WordPress Playground" style="max-width: 100%"></a>

4. Click the "Test this pull request with WordPress Playground" link. It will create a disposable WordPress website with the changes from the pull request.

    <a href="https://make.wordpress.org/test/files/2025/10/creating-plaground-site-with-pr.png"><img src="https://make.wordpress.org/test/files/2025/10/creating-plaground-site-with-pr.png" alt="Creating Playground Site with PR" style="max-width: 100%"></a>

5. Click the "Go" button if the page does not redirect automatically to the WordPress site.

    <a href="https://make.wordpress.org/test/files/2025/10/playground-site-preparing.png"><img src="https://make.wordpress.org/test/files/2025/10/playground-site-preparing.png" alt="Playground Site Preparing" style="max-width: 100%"></a>

6. You will see a new WordPress site in your browser window.

    <a href="https://make.wordpress.org/test/files/2025/10/playground-site-with-pr.png"><img src="https://make.wordpress.org/test/files/2025/10/playground-site-with-pr.png" alt="Playground Site with PR" style="max-width: 100%"></a>

There are some limitations to this Playground environment. Learn more in the [Playground limitations documentation](https://wordpress.github.io/wordpress-playground/developers/limitations/).

- All changes will be lost when a tab is closed with a Playground instance.
- All changes will be lost when refreshing the page.

In the WordPress Playground environment, you can test pull requests for feature changes, bug fixes, regression issues, and more.

## Writing a Test Report

After testing a PR, share your results by writing a test report on the Trac ticket. For report templates and guidelines, see [Patch Testing](https://make.wordpress.org/test/handbook/test-reports/patch-testing/).

## How to Configure Playground Using Query API Parameters

If you prefer a video walkthrough, you may follow along with this [video guide](https://www.youtube.com/watch?v=9q6unIg_Pto) as you work through the instructions below.

WordPress Playground exposes a simple API that you can use to configure the Playground in the browser.

It works by passing configuration options as query API parameters to the Playground URL.

For example, to install the Test Reports plugin, you would use the following URL:

[https://playground.wordpress.net/?plugin=test-reports](https://playground.wordpress.net/?plugin=test-reports)

<img src="https://make.wordpress.org/test/files/2026/04/test-reports-plugin-playground.webp" alt="Test Reports plugin installed via query parameters in Playground" style="max-width: 100%">

Similarly, by adding multiple query API parameters to the URL, you can initiate the custom Playground environment you need for testing a particular ticket.

Here are some of the parameters you can use:

- `php=8.5` - To test with a specific PHP version use the exact version or the keyword `latest`.

- `wp=trunk` - Normally we test with `trunk` but this can be set to a specific WP version such as `6.9` or set to `beta` for the latest beta version.

- `gutenberg-branch=trunk` - To set the gutenberg branch.

- `multisite=yes` - To enable multisite.

- `core-pr=12345` - To apply a pull request patch for Core.

- `gutenberg-pr=12345`  - To apply a pull request patch for Gutenberg.

For example, to initiate the Playground with WordPress `trunk` and PHP `8.3` you would use this link: [https://playground.wordpress.net/?wp=trunk&php=8.3](https://playground.wordpress.net/?wp=trunk&php=8.3)

<img src="https://make.wordpress.org/test/files/2026/04/playground-trunk-83.webp" alt="Multiple Query API parameters for Playground" style="max-width: 100%">

## How to Install and Configure Playground CLI

WordPress Playground CLI can be used as an alternative to the current Docker instance for some WordPress core testing tasks.

You can refer to this [video guide](https://www.youtube.com/watch?v=-O8oubXyhUg) for a visual walkthrough.

Setup instructions:

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

Your WordPress instance should now be accessible at `http://localhost:9400`.

<img src="https://make.wordpress.org/test/files/2026/04/playground-cli-in-browser-scaled.webp" alt="WordPress Playground running locally on port 9400" style="max-width: 100%">

You may also consider creating an alias for this long command in your terminal, so that you don't need to remember and type it every time.

Optionally, you can mount your `themes` folder if you will be adding code snippets into your active theme's `functions.php` file and want to keep the changes between rebuilds. To avoid affecting future tests, don't forget to remove any custom code snippets you have added.

Here is how you would mount the `themes` folder alongside the `plugins`.

```bash
npx @wp-playground/cli@latest server \
  --mount-before-install=./build:/wordpress \
  --wordpress-install-mode=install-from-existing-files-if-needed \
  --login \
  --site-url=http://localhost:9400 \
  --mount=./src/wp-content/plugins:/wordpress/wp-content/plugins \
  --mount=./src/wp-content/themes:/wordpress/wp-content/themes
```

### How to Create an Alias in MacOS

The most common shells are Zsh and Bash. To find out which one you are using, simply open your terminal and run `echo $SHELL`.

This command will return `/bin/zsh` or `/bin/bash`.

Next, you need to edit your shell's run command file which is a plain text configuration file that runs automatically every time you open a new terminal session.

To edit your run command file, open your terminal and run `vi ~/.zshrc` and add the following to the end of the file. Or, if you are using Bash, run `vi ~/.bashrc`.

```bash
alias play-start='npx @wp-playground/cli@latest server \
  --mount-before-install=./build:/wordpress \
  --wordpress-install-mode=install-from-existing-files-if-needed \
  --login \
  --site-url=http://localhost:9400 \
  --mount=./src/wp-content/plugins:/wordpress/wp-content/plugins'
```

Here, `play-start` is your `alias` that you will be using to run the long npx command. You can choose any name that you can easily remember.


Then reload your config with one of the following commands: `source ~/.zshrc` if you are using Zsh or `source ~/.bashrc` if you are using Bash.

Now you can just run `play-start` from your terminal from the folder where you cloned the wordpress-develop repo.

<img src="https://make.wordpress.org/test/files/2026/04/start-playground-cli-using-alias-scaled.webp" alt="Start Playground using an alias" style="max-width: 100%">

### How to Create an Alias in Windows PowerShell

The `$PROFILE` is the PowerShell equivalent of `~/.zshrc` on Zsh. It runs automatically every time you open a PowerShell session, so it's where you add your functions, aliases, and environment variables.

To edit it, run `notepad $PROFILE`.

If you don't have an existing `$PROFILE`, you might need to run the following command first to create it:

```powershell
New-Item -Path $PROFILE -ItemType File -Force
```

The `-Force` flag handles it gracefully. It creates the file (and any missing folders) if it doesn't exist, and does nothing if it already exists.

PowerShell doesn't have aliases for multi-line commands. So you need a function. Add this to your PowerShell profile:

```powershell
function play-start {
  npx @wp-playground/cli@latest server `
    --mount-before-install=./build:/wordpress `
    --wordpress-install-mode=install-from-existing-files-if-needed `
    --login `
    --site-url=http://localhost:9400 `
    --mount=./src/wp-content/plugins:/wordpress/wp-content/plugins
}
```

Note the backtick character, `` ` ``, instead of `\` for line continuation.

Close your PowerShell and reopen it before calling your alias, which is `play-start` in this example.

If you get an `npm error code ENOENT` when calling the alias, create the `npm` folder inside `C:/Users/yourname/AppData/Roaming` and then try to run your alias again.

## The Build Workflow for Testing Patches in Playground CLI

Testing patches with Playground CLI is almost same with the steps provided at the [Testing Core Tickets with Grunt](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-grunt/#applying-patches) page.

The only difference is how to `build` after applying the patch.

When using Docker Desktop services, you would use `npm run build:dev` to apply JavaScript and CSS changes. If the patch changes only PHP files, there is no need to run `npm run build:dev` again.

However, since Playground CLI serves files from the `build` folder, which is compiled from the `src` folder, you need to rerun `npm run build` after applying the patch.

But you don't need to rerun `npm install` after applying changes, unless changes affect `package.json` or `package.lock.json`.

## Resources
- [WPContrib WordPress Test Contributor Pathway YouTube Channel](https://www.youtube.com/@WPContrib) by [@SirLouen](https://profiles.wordpress.org/sirlouen/)
- [WordPress Playground Docs](https://wordpress.github.io/wordpress-playground/)
- [Playground CLI Docs](https://wordpress.github.io/wordpress-playground/developers/local-development/wp-playground-cli/)
- [PowerShell Docs for Setting Alias](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias)
- [SS64 Docs for Setting Aliases and Macros](https://ss64.com/)
