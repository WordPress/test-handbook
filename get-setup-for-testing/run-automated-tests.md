# Run Automated Tests

Automated tests are crucial for ensuring that changes to WordPress core do not introduce regressions. This guide covers how to run the PHP and End-to-End (E2E) test suites locally.

## Prerequisites
Ensure a local testing environment is set up. See [Set Up a Testing Environment](https://make.wordpress.org/test/handbook/get-setup-for-testing/set-up-a-testing-environment/).

To learn how to apply patches before running tests, see [Test Core Tickets with Grunt](https://make.wordpress.org/test/handbook/get-setup-for-testing/test-core-tickets-with-grunt/).

## Run PHP Tests (PHPUnit)

The PHP unit tests cover the backend PHP code of WordPress.

To run the full PHPUnit test suite:
```bash
npm run test:php
```

### Running Specific Tests
To run a specific group of tests (often related to a specific Trac ticket, if tagged):
```bash
npm run test:php -- --group 27307
```

To run tests within a specific class or file (filter):
```bash
npm run test:php -- --filter WP_Test_User_Query
```

## Run End-to-End (E2E) Tests

E2E tests verify the behavior of the application from the user's perspective, running in a browser environment.

To run the end-to-end test suite:
```bash
npm run test:e2e
```

## Troubleshooting

### "Error: ECONNREFUSED"
- **Cause:** The local environment or Docker is not running.
- **Fix:** Start Docker Desktop and run:

```bash
npm run env:start
```

### "Database connection failed"
- **Cause:** The database container isn't ready or needs to be reset.
- **Fix:** Wait a few seconds and try again, or reset the environment:

```bash
npm run env:reset
npm run env:install
```
