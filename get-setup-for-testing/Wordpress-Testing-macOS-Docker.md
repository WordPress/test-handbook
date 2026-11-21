#  Running tests and reports (Docker & macOS)

Execute PHPUnit in the PHP container and retain machine-readable, human-readable, and terminal-log evidence.

## Running tests and reports

Run PHPUnit from the WordPress Develop repository root, inside the PHP service. The command below executes the configured test suite and creates three execution artefacts: a JUnit XML report, a TestDox HTML report, and a plain-text execution log.

### Prepare the reports directory

```bash
# Run from the repository root on the host
mkdir -p ./reports
```

**Path requirement:** The `reports/` directory must also be visible and writable at the same relative path from the PHP container. The XML and TestDox reports are written by PHPUnit inside the container; the execution log is written by `tee` on the host. Ensure the Compose bind mount maps these paths to the same project directory. Create the directory in the container as well if it is not provided by the mount.

### Run the suite and generate all reports

```bash
# Run from the repository root
set -o pipefail

docker compose exec php vendor/bin/phpunit \
  --log-junit ./reports/phpunit-results.xml \
  --testdox-html ./reports/phpunit-report.html \
  2>&1 | tee ./reports/phpunit-execution.log
```

- `--log-junit` writes a machine-readable JUnit XML report.
- `--testdox-html` generates an HTML summary with test names.
- `2>&1` combines standard error with standard output.
- `tee` displays the combined output in the terminal while saving it to the log file.

`set -o pipefail` is important: without it, the shell may return the exit status of `tee` rather than the PHPUnit process. With it enabled, a PHPUnit failure remains visible in the command's exit status.

### Generated files

| File | Purpose | Where it is written |
|---|---|---|
| `reports/phpunit-results.xml` | JUnit results for CI systems and automated analysis. | PHP container; must be in the shared project directory. |
| `reports/phpunit-report.html` | Human-readable TestDox report listing test outcomes. | PHP container; must be in the shared project directory. |
| `reports/phpunit-execution.log` | Complete terminal output, including errors and warnings. | Host machine, written by `tee`. |

### Interpreting results

| Result | Meaning | Recommended action |
|---|---|---|
| **PASS** | The test completed and all assertions passed. | Retain the result as evidence of successful execution. |
| **FAIL** | The test ran, but at least one assertion did not match the expected result. | Inspect the assertion message, expected and actual values, test data, and related code. |
| **ERROR** | The test could not complete normally because an execution error occurred. | Inspect the exception and stack trace; verify bootstrap, PHP extensions, configuration, database connectivity, and dependencies. |
| **SKIPPED** | The test was intentionally or conditionally not executed. | Read the skip reason and determine whether the condition is expected or indicates missing coverage. |
| **WARNING** | A warning was reported during execution; it is not necessarily a failed assertion. | Review the warning and establish whether it is environmental, deprecated behaviour, or a potential defect. |

The number of tests, assertions, failures, and errors are different measures. A single test may contain multiple assertions. A successful process exit and the generated reports should both be checked; warnings should not automatically be classified as test failures.

### Failure investigation procedure

1. Identify the failing or errored test and the affected source file.
2. Read the complete message and stack trace in the terminal log or JUnit XML.
3. Reproduce the case in isolation using PHPUnit's `--filter` option.
4. Check environmental conditions: PHP and PHPUnit versions, extensions, configuration, database, and environment variables.
5. Compare expected and actual results and identify the cause.
6. Apply a focused correction and rerun the isolated test.
7. Run a broader relevant suite to check for regressions.

**Execution record.** Record the date, Git commit, PHP version, PHPUnit version, configuration, exact command, exit status, report files, and any defects. For meaningful comparisons, use the same test scope and comparable environments.


## Best practices and checklist

### Before a test session

- The branch and commit are identified.
- Local changes are protected.
- Required containers are running.
- The test database is available and separate from production.
- PHP and PHPUnit versions are known.
- PHPUnit points to the correct bootstrap and database.
- Required PHP extensions are loaded.

### After a test session

- The execution summary has been recorded.
- The JUnit report has been retained.
- Failures have been reproduced individually where possible.
- Warnings, errors, and skipped tests have been assessed.
- Corrections have been retested.
- A regression suite appropriate to the change has been run.

### Documenting a baseline

For each significant run, retain at least:

- Date and time.
- Repository, branch, and commit.
- WordPress, PHP, database, and PHPUnit versions.
- Configuration file used.
- Command executed.
- Number of tests, assertions, failures, errors, warnings, and skipped tests.
- Report location and notes on anomalies.


##  Xdebug 3 & VS Code PHPUnit Configuration

Configuring PHP debugging for WordPress Develop in
Docker on macOS using Xdebug 3 and Visual Studio Code.

## Reference environment

Change to the project directory:

``` bash
cd ~/Wordpress/wordpress-develop
```

  Operating system          macOS
  Project                            WordPress Develop
  Web server                     Nginx
  PHP service                    Docker Compose service: `php`
  Verified Nginx document root   `/var/www/src`
  Local URL                      `http://localhost:8889`
  Debugger                       Xdebug 3
  IDE                                  Visual Studio Code
  Xdebug port                  `9003`
  PHPUnit executable     `vendor/bin/phpunit`

The `/var/www/src` document root was verified in the Nginx configuration
inside the container. The container paths used by PHPUnit and the test
files should be checked before adding any further `pathMappings`.

## Check Docker, PHP and Xdebug

Start the containers and check their status:

``` bash
docker compose up -d
docker compose ps
```

Check PHP, Xdebug and the loaded INI files:

``` bash
docker compose exec php php -v
docker compose exec php php --ri xdebug
docker compose exec php php --ini
```

The following file was found in the PHP container:

``` text
/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
```

Its initial verified content is:

``` ini
zend_extension=xdebug
```

This directive loads the extension. The settings required to connect to
VS Code are configured separately.

## Configure Xdebug 3 in the PHP container

Create an additional INI file directly inside the container:

``` bash
docker compose exec php sh -c 'cat > /usr/local/etc/php/conf.d/99-xdebug-debug.ini <<EOF
xdebug.mode=debug,develop
xdebug.start_with_request=trigger
xdebug.client_host=host.docker.internal
xdebug.client_port=9003
xdebug.log=/tmp/xdebug.log
xdebug.log_level=7
EOF'
```

The command uses `docker compose exec` to run a shell in the `php`
service. `cat` receives the text through a here-document (`<<EOF`), and
the `>` redirection writes it to the target file, overwriting it if it
already exists.

Verify the file:

``` bash
docker compose exec php cat \
  /usr/local/etc/php/conf.d/99-xdebug-debug.ini
```

Restart PHP and verify the effective settings:

``` bash
docker compose restart php
docker compose exec php php --ri xdebug
```

Check that `debug,develop`, trigger mode, `host.docker.internal` and
port `9003` are enabled.

## Configure Visual Studio Code

Install the Xdebug **PHP Debug** extension (extension identifier:
`xdebug.php-debug`).

Create the configuration directory:

``` bash
mkdir -p .vscode
```

Create or update `.vscode/launch.json`:

``` json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "WordPress - Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "pathMappings": {
                "/var/www/src": "${workspaceFolder}/src"
            },
            "log": true
        },
        {
            "name": "PHPUnit - Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "pathMappings": {
                "/var/www/src": "${workspaceFolder}/src"
            },
            "log": true
        }
    ]
}
```

The `/var/www/src` → `${workspaceFolder}/src` mapping matches the
verified Nginx document root. This configuration does not assume a
container path for the test files. Before adding a mapping for `tests/`,
check the actual paths inside the container:

``` bash
docker compose exec php pwd
docker compose exec php ls -la
docker compose exec php ls -la /var/www
```

In VS Code, open **Run and Debug**, select the required configuration
and press **F5**. VS Code will listen for Xdebug connections on TCP port
`9003`.

Check on macOS that the port is listening:

``` bash
lsof -nP -iTCP:9003 -sTCP:LISTEN
```

## Debug WordPress HTTP requests

1.  Start the containers with `docker compose up -d`.
2.  Open the project in VS Code.
3.  Set a breakpoint in a PHP file under `src/`.
4.  Start the `WordPress - Xdebug` configuration by pressing **F5**.
5.  Open the following URL in your browser:

``` text
http://localhost:8889/?XDEBUG_TRIGGER=1
```

With `xdebug.start_with_request=trigger`, the `XDEBUG_TRIGGER=1`
parameter requests a debugging session for that HTTP request. If
execution reaches the breakpoint, VS Code pauses.

## Debug PHPUnit tests inside the container

The following command runs PHPUnit directly in the PHP service and
passes the environment variables required to activate Xdebug:

``` bash
docker compose exec \
  -e XDEBUG_MODE=debug \
  -e XDEBUG_TRIGGER=1 \
  php vendor/bin/phpunit \
  --filter=test_wp_finalize_template_enhancement_output_buffer_with_errors_while_processing \
  tests/phpunit/tests/template.php
```

Procedure:

1.  Open `tests/phpunit/tests/template.php` in VS Code.
2.  Set a breakpoint in
	`test_wp_finalize_template_enhancement_output_buffer_with_errors_while_processing`,
	or in the WordPress code called by that test.
3.  Start the `PHPUnit - Xdebug` configuration by pressing **F5**.
4.  Run the PHPUnit command above.
5.  When execution reaches the breakpoint, use the VS Code debugger to
	inspect the execution.

The direct `docker compose exec ... php vendor/bin/phpunit` command is
the execution method covered by this guide. If you use
`npm run test:php`, inspect `package.json` to determine how the script
starts PHPUnit and whether the Xdebug variables are forwarded to the PHP
process inside the container. Environment variables set on macOS are not
automatically passed into an already-running container.

## Troubleshooting

----
##  Check                               Command

  Container status                    `docker compose ps`

  PHP version                         `docker compose exec php php -v`

  Xdebug status                       `docker compose exec php php --ri xdebug`

  Loaded INI files                    `docker compose exec php php --ini`

  Xdebug configuration                `docker compose exec php cat /usr/local/etc/php/conf.d/99-xdebug-debug.ini`

  Xdebug log                          `docker compose exec php tail -f /tmp/xdebug.log`

  VS Code listener on macOS           `lsof -nP -iTCP:9003 -sTCP:LISTEN`

  Restart PHP  `docker compose restart php`

If VS Code does not stop at breakpoints, check the following in order:

1.  Xdebug is loaded and `xdebug.mode` includes `debug`.
2.  VS Code is listening on port `9003`.
3.  `xdebug.client_host` is set to `host.docker.internal`.
4.  The trigger is present (`XDEBUG_TRIGGER=1` for PHPUnit, or a
	parameter/cookie for HTTP requests).
5.  The `pathMappings` match the actual paths inside the container.
6.  `/tmp/xdebug.log` does not report connection errors.

## Configuration persistence

The `99-xdebug-debug.ini` file created with `docker compose exec` is
stored in the container filesystem:

-   It survives a simple `docker compose restart`.
-   It may be lost when the container is removed and recreated.
-   It is not tracked in the Git repository.

To make the configuration persistent, add it to the PHP image build
process or mount an INI file maintained in the repository through Docker
Compose. Verify the temporary configuration first; rebuilding the image
is not required for the initial test.

## Quick start sequence

``` bash
# Change to the project directory
cd ~/Wordpress/wordpress-develop

# Start Docker
docker compose up -d

# Check Xdebug
docker compose exec php php --ri xdebug

# Start the VS Code listener by pressing F5

# Run a test with Xdebug enabled
docker compose exec \
  -e XDEBUG_MODE=debug \
  -e XDEBUG_TRIGGER=1 \
  php vendor/bin/phpunit \
  --filter=test_name_of_the_test \
  tests/phpunit/tests/path-to-test-file.php

# If necessary, inspect the Xdebug log
docker compose exec php tail -f /tmp/xdebug.log
