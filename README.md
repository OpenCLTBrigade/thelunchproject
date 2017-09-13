# The Lunch Project

## Getting Started
[NodeJS 8](https://nodejs.org/en/) or above is required.
[Docker](https://www.docker.com/) is required.

### Server Configuration Setup
docker pull postgres
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

* Clone from github: `git clone https://github.com/CodeForCharlotte/thelunchproject.git && cd thelunchproject`
* Run `npm install` to install the dependencies.
* Run `npm start` to run the client & server with development defaults.

#installation to do db migrations
TODO

#command to update database with latest migrations.
TODO

#command to create databae migrations
TODO