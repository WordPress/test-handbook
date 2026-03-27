# Email Testing

Email testing is important for WordPress testing because WordPress core relies on transactional emails for essential functions like user registration, password resets, and admin notifications. Capturing and verifying these emails ensures that the correct messages are triggered with proper content and formatting during the testing process.

## Email Capture Methods for Different Testing Environments

Depending on the testing environment, you can either use an Email Logger plugin that hooks into the [wp_mail](https://developer.wordpress.org/reference/functions/wp_mail/) function or use a tool like [Mailpit](https://github.com/axllent/mailpit) to capture outgoing emails.

### 1. Using Email Logger Plugin

This method can be used on your local development environment as well as on [WordPress Playground](https://wordpress.github.io/wordpress-playground/), and doesn't have external dependencies or require a technical configuration.

<a href="https://make.wordpress.org/test/files/2026/02/email-logger-plugin.jpg"><img src="https://make.wordpress.org/test/files/2026/02/email-logger-plugin.jpg" alt="Email Logger Plugin" style="max-width: 100%"></a>

Steps to use:

1. [Download](https://make.wordpress.org/test/files/2026/02/wp-email-logger.zip) the plugin, install it from `Plugins > Add Plugin > Upload Plugin` and activate it.
2. Use the `Email Log` menu item to view captured emails.

You can also use this [WordPress Playground](https://playground.wordpress.net/?php=8.3&wp=trunk&plugin=https://make.wordpress.org/test/files/2026/02/wp-email-logger.zip) instance that comes with `Email Logger` plugin preinstalled.

### 2. Using Mailpit

Mailpit is a lightweight email testing tool that runs locally and captures all outgoing emails from your development environment, providing a web interface where you can view, inspect, and test emails without actually sending them to real recipients.

<a href="https://make.wordpress.org/test/files/2026/02/mailpit-inbox-screenshot.jpg"><img src="https://make.wordpress.org/test/files/2026/02/mailpit-inbox-screenshot.jpg" alt="Mailpit Inbox Screenshot" style="max-width: 100%"></a>

You can browse emails easily through Mailpit's user interface that acts as a mail client.

<a href="https://make.wordpress.org/test/files/2026/02/mailpit-sample-email.jpg"><img src="https://make.wordpress.org/test/files/2026/02/mailpit-sample-email.jpg" alt="Mailpit Sample Email" style="max-width: 100%"></a>

Steps to install and use Mailpit:

1. Create `docker-compose.override.yml` with the following code in root folder of your cloned [WordPress Develop](https://github.com/WordPress/wordpress-develop) Repo.

```
services:
  mail:
    container_name: mailpit
    image: axllent/mailpit
    restart: unless-stopped
    ports:
      - "1025:1025" # smtp server
      - "8025:8025" # web ui
    environment:
      MP_MAX_MESSAGES: 5000
      MP_SMTP_AUTH_ACCEPT_ANY: 1
      MP_SMTP_AUTH_ALLOW_INSECURE: 1
    networks:
      - wpdevnet
```

<a href="https://make.wordpress.org/test/files/2026/02/docker-compose-override.png"><img src="https://make.wordpress.org/test/files/2026/02/docker-compose-override.png" alt="Docker Compose Override File" style="max-width: 100%"></a>

2. Run the command `docker compose up -d mail` in your terminal.
3. Test access to Mailpit at `http://localhost:8025/`.
4. Add the following snippet to your active theme's `functions.php` or via [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin.

```
add_action( 'phpmailer_init', function( $phpmailer ) {
    $phpmailer->isSMTP();
    $phpmailer->Host = 'localhost';
    $phpmailer->Port = 1025;
} );

add_filter( 'wp_mail_from', function( $email ) {
    return 'noreply@example.com';
});
```

## Conclusion

Without a mail testing mechanism like the ones described here, transactional emails triggered during testing would either fail silently or be sent to real email addresses, making it difficult to verify that WordPress core functionality is working correctly.

By using the Email Logger plugin or Mailpit, you can capture and inspect these emails to ensure they're triggered properly with the correct content and formatting.
