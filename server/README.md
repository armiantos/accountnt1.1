# accountnt1.1-client

## Requirements

-   Node v16.15.0

## Getting started

1. Install dependencies
    ```shell
    cd client/
    npm i
    ```
2. Follow the database setup instructions below
3. Copy `.env.development.template` to `.env.development`
4. Copy the `audience` and `issuer` fields from [_accountnt-server's Auth0 API dashboard_](https://manage.auth0.com/dashboard/) to `.env.development`

    ![auth0 audience and issuer configuration](./docs/img/auth0Config.png)

5. Run local server with auto restart at [localhost:3001](http://localhost:3001)
    ```shell
    npm run start:dev
    ```

## Database set-up

1. Set-up a postgres instance on port 5432 with username:password postgres:postgres and a default database with name _accountnt-dev_. You can use the included docker-compose file to do this

    ```
    docker compose up
    ```

2. Scaffold the dev and test databases using

    ```
    npm run migrate:dev   # for dev
    npm run migrate:test  # for test
    ```

You can use the following command to terminate the database

```
docker compose down
```
