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
3. Run local server with auto restart at [localhost:3001](http://localhost:3001)
    ```shell
    npm run start:dev
    ```

## Database set-up

1. Set-up a postgres instance on port 5432 with username:password postgres:postgres and a default database with name _accountnt-dev_. You can use the included docker-compose file to do this

    ```
    docker-compose up db -d
    ```

2. Copy `server/.env.development` to `server/.env` to set is as the default server for development

3. Scaffold the dev (and optionally the test) database(s) using

    ```
    npx prisma migrate dev                        # for dev
    dotenv -e .env.test -- npx prisma migrate dev # for the test database
    ```

You can use the following command to terminate the database

```
docker-compose down
```
