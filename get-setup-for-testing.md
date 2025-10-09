# Get Set Up for Testing

Welcome! To help test, your first step will be to set up a test environment.

## Set Up a Hosted WordPress Site

1. If you already have hosting setup for a site you own, consider asking your web host how to add an additional site in a subdomain or subfolder for testing purposes. Each host may have different options, and they should be able to help advise you.  
2. If you have a small budget to work with, setting up additional hosting to use for testing is helpful because it also helps to diversify tests in varying different environments.  
3. You can go to [https://wordpress.org/hosting/](https://wordpress.org/hosting/) to see a list of recommended hosts.

## Install in a Local Environment

Use this option if you would like to test pull requests or if you would like to check if something is working with the bleeding edge version.

1. Make sure you have [git](https://git-scm.com), [node](https://nodejs.org), and [npm](https://www.npmjs.com/get-npm) installed.  
2. Install [docker](https://www.docker.com).  
3. [Clone](https://help.github.com/articles/cloning-a-repository/) the [gutenberg](https://github.com/WordPress/gutenberg) repository locally.  
4. Run `npm install`.  
5. Run `npm run wp-env start`.  
6. Open [http://localhost:8888](http://localhost:8888) in your browser (username: `admin`, password: `password`).

Need more detailed installation instructions? Please see [Contributing](https://github.com/WordPress/gutenberg/blob/master/CONTRIBUTING.md) in the documentation.

## Install Gutenberg as a Plugin

Use this option to do general testing with the latest beta or release candidate versions of the Gutenberg editor:

1. Go to [https://github.com/WordPress/gutenberg/releases](https://github.com/WordPress/gutenberg/releases). Note: you may need to scroll through several pages of dependencies.  
2. Download the latest `gutenberg.zip` file.  
3. Go to WP Admin > Plugins > Add New > Upload `Plugin`.  
4. Select the file from step 2.  
5. Follow the prompts to install and activate the plugin.

## Useful Commands

*All of these commands are intended to be run from Terminal, in your Gutenberg directory.*

- Running `npm install` occasionally is a useful habit, as well as any time you know that `packages.json` has been changed.  
- If you restart your computer, or upgrade Docker, start the Gutenberg containers again by running: `docker-compose up -d`
- It’s a good practice to stop (with `Ctrl+C`) `npm run dev` and restart when you switch to a different branch.  
- If everything is broken, and you have no idea what’s happened, run `bin/setup-local-env.sh` again to reset everything to a fresh install.

Thank you for testing!
