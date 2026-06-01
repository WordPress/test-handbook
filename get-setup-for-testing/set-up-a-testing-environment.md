# Set Up a Testing Environment

To test WordPress core tickets effectively, you need an environment where you can apply patches and run tests. **Patches are created against the [`trunk`](https://github.com/WordPress/wordpress-develop) branch**, the development version of WordPress, not the stable release from wordpress.org/download, so you'll need to work with the development codebase. This guide covers the options available for setting up a testing environment.

## Choose Your Environment

There are two main ways to test WordPress core tickets:

1.  **WordPress Playground (Browser-based):** Best for quick visual testing and verifying patches without installing anything on your computer.
2.  **Local Development Environment:** Required for more advanced testing, running automated tests (PHPUnit, e2e), and working with complex patches or build tools.

### When to use Playground?
- You need to quickly verify a visual change or a bug fix.
- You cannot or do not want to install software on your computer.
- The ticket has a Pull Request (PR) or a ZIP file that Playground can load.

[Learn how to use Playground for testing](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-playground/)

### When to use a Local Environment?
- You need to use command-line tools like `grunt` or `git`.
- You want to run automated test suites (PHPUnit, end-to-end tests).
- You are developing a patch or working on a complex feature that requires a persistent environment.

## Setting Up a Local Environment

The recommended way to set up a local environment for WordPress core development is using **Docker**.

### Prerequisites
Before you begin, ensure you have the following installed on your computer:
1.  **Node.js**: Version 20.10.0 or later.
2.  **npm**: Version 10.2.3 or later (usually comes with Node.js).
3.  **Git**: For version control.
4.  **Docker Desktop** (or a compatible container runtime like OrbStack, Colima, or Rancher Desktop).

### Setup Instructions

**Prefer a video walkthrough?** <br>
Follow along with this [step-by-step setup guide](https://www.youtube.com/watch?v=LMgn8GjUdNk) as you work through the instructions below.

1.  **Fork and Clone the Repository** <br>
    Fork the [WordPress/wordpress-develop](https://github.com/WordPress/wordpress-develop) repository to your GitHub account, then clone it locally:
    ```bash
    git clone https://github.com/YOUR_USERNAME/wordpress-develop.git
    cd wordpress-develop
    git remote add upstream https://github.com/WordPress/wordpress-develop.git
    ```
    Adding the `upstream` remote allows you to keep your local repository in sync with the latest changes from WordPress core.

2.  **Install Dependencies** <br>
    Run the following command to install the necessary JavaScript and PHP tools:
    ```bash
    npm install
    ```

3.  **Build WordPress** <br>
    Compile the source files into a running WordPress instance:
    ```bash
    npm run build:dev
    ```

4.  **Start the Environment** <br>
    Ensure Docker Desktop is running, then start the Docker environment:
    ```bash
    npm run env:start
    ```

5.  **Install WordPress** <br>
    Run the installation script to set up the database and site:
    ```bash
    npm run env:install
    ```

Your local WordPress site should now be accessible at `http://localhost:8889`.

- **Username:** `admin`
- **Password:** `password`

### Common Commands

-   **Start environment:** `npm run env:start`
-   **Stop environment:** `npm run env:stop`
-   **Reset environment:** `npm run env:reset` (Warning: deletes database)
-   **Run WP-CLI commands:** `npm run env:cli -- <command>` (e.g., `npm run env:cli -- user list`)

### Optional Database Inspection

Some test scenarios require checking or editing database rows directly. If you need a browser-based database tool, add a `phpmyadmin` service to a `docker-compose.override.yml` file in the root of your local `wordpress-develop` checkout.
If you already use an override file for another local service, such as Mailpit, add `phpmyadmin` under the same `services` block.

```yaml
services:
  phpmyadmin:
    image: phpmyadmin:latest
    restart: unless-stopped
    depends_on:
      - mysql
    ports:
      - '8080:80'
    environment:
      PMA_HOST: mysql
      PMA_USER: root
      PMA_PASSWORD: password
    networks:
      - wpdevnet
```

Start the service with:

```bash
docker compose up -d phpmyadmin
```

Then open `http://localhost:8080` in your browser. This uses the default local database credentials from the WordPress development environment. The default database name is `wordpress_develop`.
When you are finished, stop the service with:

```bash
docker compose stop phpmyadmin
```

## Next Steps

Now that your local environment is set up, learn how to apply patches and run tests:

*   [Test Core Tickets with Grunt](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-grunt/)

## Resources
- [WPContrib WordPress Test Contributor Pathway YouTube Channel](https://www.youtube.com/@WPContrib) by [@SirLouen](https://profiles.wordpress.org/sirlouen/)
