# Database Inspection

Some test scenarios require checking or editing database rows directly. If you need a browser-based database tool for a local WordPress development environment, you can add phpMyAdmin to your `wordpress-develop` Docker setup.

## Using phpMyAdmin

Create or update `docker-compose.override.yml` in the root of your local [WordPress Develop](https://github.com/WordPress/wordpress-develop) checkout. If you already use an override file for another local service, such as Mailpit, add `phpmyadmin` under the same `services` block.

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

Then open http://localhost:8080 in your browser. This uses the default local database credentials from the WordPress development environment. The default database name is `wordpress_develop`.

When you are finished, stop the service with:

```bash
docker compose stop phpmyadmin
```

## When to Use Database Inspection

Use database inspection when a test case asks you to confirm stored values, check records created by a feature, or make a targeted database change as part of a reproduction. For most testing tasks, the WordPress admin screens, WP-CLI, and automated tests should be enough.
