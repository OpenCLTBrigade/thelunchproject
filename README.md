# The Lunch Project
This application, developed by [Code for Charlotte]
## Getting Started
[Node] and [Docker] are required.
See [Dependencies Documentation] below for more information on the dependencies we use.

### Server configuration setup
docker pull postgres
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

### Running the app

* Clone from github: `git clone https://github.com/CodeForCharlotte/thelunchproject.git && cd thelunchproject`
* Run `npm install` to install the dependencies.
* Run `npm start` to run the client & server with development defaults.

#installation to do db migrations
TODO

#command to update database with latest migrations.
TODO

#command to create databae migrations
TODO

## Dependencies Documentation

The backend is an [Express] application running in [Node] and enhanced with [routing-controllers]. The source code is written in [TypeScript] and transpiled to JavaScript using [FuseBox]

Authentication is provided [jsonwebtoken]. Passwords are encrypted using [bcrypt].

Data is stored in a [PostgreSQL] database using [TypeORM]


Email is sent using [tbd]. Email templates are rendered with
[tbd]. For development, we use [tbd] to test sending
emails.

The frontend is written with [Preact], a lightweight flavor of [React].  The UI is styled with [Bloomer] which is based on [Bulma].  Communication with the API is handled through [axios]. We're using [cxs] for custom styles (in place of LESS / SCSS).

Back end tests are run using [tbd].

[Code for Charlotte]: http://www.codeforcharlotte.org/
[Node]: https://nodejs.org/en/docs/
[Docker]: https://www.docker.com
[Express]: https://expressjs.com/en/4x/api.html
[routing-controllers]: https://github.com/pleerock/routing-controllers
[jsonwebtoken]: https://github.com/auth0/node-jsonwebtoken
[bcrypt]: https://en.wikipedia.org/wiki/Bcrypt
[TypeScript]: https://www.typescriptlang.org
[FuseBox]: http://fuse-box.org/
[PostgreSQL]: https://www.postgresql.org/
[TypeORM]: https://github.com/typeorm/typeorm

[Preact]: https://preactjs.com/
[React]: https://facebook.github.io/react/
[Bulma]: http://bulma.io/
[Bloomer]: https://bloomer.js.org
[axios]: https://github.com/mzabriskie/axios
[cxs]: https://github.com/jxnblk/cxs

## Contact

* Slack account registration: https://codeforclt.typeform.com/to/wcYsrE
* Slack channel: https://codeforclt.slack.com/messages/C5KV936QH/
