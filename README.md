# The Lunch Project

## Server Configuration Setup
docker pull postgres
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

#installation to do db migrations
TODO

#command to update database with latest migrations.
TODO

#command to create databae migrations
TODO

## Run client & server
`cross-env DB_HOST="<HOST>" DB_USERNAME="<YOUR_DB_USERNAME>" DB_PASSWORD="<DB_PASSWORD>" DB_NAME="<DB_NAME>" node fuse`