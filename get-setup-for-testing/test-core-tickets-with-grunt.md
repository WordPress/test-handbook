# Test Core Tickets with Grunt

Grunt is a JavaScript-based task runner that WordPress uses to automate development tasks. This guide assumes you have already [set up a local testing environment](https://make.wordpress.org/test/handbook/get-setup-for-testing/set-up-a-testing-environment/).

## Why use Grunt?
- To apply patches from Trac tickets easily.
- To build the WordPress core files after changes.
- To run automated tests.

## Applying Patches

**Prefer a video walkthrough?**
Follow along with this [step-by-step setup guide](https://www.youtube.com/watch?v=5MRJ8687gF4) as you work through the instructions below.

The most common task for testers is applying a patch from a Trac ticket to your local environment.

### 1. Find the Ticket or Patch ID
Go to [Needs Patch Testing in Core Trac](https://core.trac.wordpress.org/query?status=accepted&status=assigned&status=new&status=reopened&status=reviewing&keywords=~needs-testing+has-patch&focuses=!docs&col=id&col=summary&col=focuses&col=keywords&col=owner&col=type&col=priority&col=changetime&order=changetime) and find the ticket you want to test.
- Ideally, identify the **Ticket ID** (e.g., `27307`).
- Or, find the specific **Patch URL** (e.g., `https://core.trac.wordpress.org/attachment/ticket/27307/27307.diff`).

### 2. Apply the Patch
In your terminal, navigate to your `wordpress-develop` directory and run:

**Using the Ticket Number (Recommended):**
This will download and apply the latest patch for that ticket.
```bash
npm run grunt patch:27307
```
*(Replace `27307` with the actual ticket number)*

**Using a Specific Patch URL:**
```bash
npm run grunt patch:https://core.trac.wordpress.org/attachment/ticket/27307/27307.diff
```

**Using a GitHub Pull Request:**
You can apply patches directly from a GitHub Pull Request using either the direct URL or the `.diff` URL.

**Option 1: Using the Direct Pull Request URL**
```bash
npm run grunt patch:https://github.com/WordPress/wordpress-develop/pull/10815
```

**Option 2: Using the Diff URL**
```bash
npm run grunt patch:https://github.com/WordPress/wordpress-develop/pull/10815.diff
```

### 3. Build the Changes
After applying a patch, you may need to build the changes depending on what was modified:

*   **JavaScript or CSS changes:** You **MUST** run the build command to compile the assets.

```bash
npm run build:dev
```
*   **PHP-only changes:** Running the build command is **not mandatory**, but it is good practice to ensure everything is in sync.


## Running Tests

Once a patch is applied, you should run automated tests to ensure no regressions were introduced.

For detailed instructions on running PHPUnit and E2E tests, see [Run Automated Tests](https://make.wordpress.org/test/handbook/get-setup-for-testing/run-automated-tests/).


## Troubleshooting

### "Patch failed to apply"
- **Cause:** The code in your local version might be different from what the patch expects (e.g., your branch is outdated).
- **Fix:** Update your repository to the latest trunk before applying the patch:

```bash
git checkout trunk
git pull upstream trunk
```

If you get an error about `upstream` not being found, add it first:

```bash
git remote add upstream https://github.com/WordPress/wordpress-develop.git
```

### "Cannot find module 'grunt-cli/bin/grunt'"
- **Cause:** Missing dependencies.
- **Fix:** Reinstall dependencies:

```bash
rm -rf node_modules
npm install
```

### Reverting Changes
To remove a patch and go back to a clean state:
```bash
git checkout .
git clean -fd
```

## Resources
- [WPContrib WordPress Test Contributor Pathway YouTube Channel](https://www.youtube.com/@WPContrib) by [@SirLouen](https://profiles.wordpress.org/sirlouen/)
