# accountnt1.1-client

## Requirements

- Node v14.17.1

## Getting started

1. Install dependencies
   ```shell
   cd client/
   npm i
   ```
2. Run local server with auto restart at [localhost:3001](http://localhost:3001)
   ```shell
   npm run start:dev
   ```

## Database set-up

Set-up a postgres instance on port 5432 with username:password postgres:postgres and a default database with name _accountnt_. You can use the following docker command to accomplish this

```
docker run --rm \
  --name pg-accountnt1.1 \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=accountnt \
  -d -p 5432:5432 \
  -v $HOME/docker/volumes/postgres/accountnt1.1:/var/lib/postgresql/data \
  postgres:13
```

You can use the following command to terminate the database

```
docker stop pg-accountnt1.1
```
