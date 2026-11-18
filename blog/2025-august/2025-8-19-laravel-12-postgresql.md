---
slug: laravel-connect-postgresql
title: Connecting Laravel 12 to PostgreSQL in Arch Linux
authors: faiz_maulana_habibi
tags: [linux, docusaurus]
---

## Installing PostgreSQL

Install postgresql in your arch using

```sh
sudo pacman -S postgresql php-pgsql apache

# activate postgresql and apache systemd services
sudo systemctl enable {postgresql,httpd}
sudo systemctl start {postgresql,httpd}

# verify
sudo systemctl status {postgresql,httpd}
```

`{/* truncate */}`

It will look like this

![Systemd Services](./img/apache-postgresql.webp)

## Create User & Database in postgresql

### Create User

```sh
sudo -iu postgres
```

![Login PostgreSQL](./img/login-postgresql.webp)

After login to posgresql database, then create user

```sh
# create new user
createuser --bypassrls -s -l -d laravel
```

![Create User](./img/createuser.webp)

### Create Database

```sh
createdb -O laravel laravel_db
```

![Create DB](./img/createdb.webp)

## Set .env in Laravel

```sh
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432                # port postgresql
DB_DATABASE=laravel_db      # database
DB_USERNAME=laravel         # user
DB_PASSWORD=
```

then `php artisan migrate:fresh`.
Done!
