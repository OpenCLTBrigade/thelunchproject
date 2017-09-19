# Contributing to The Lunch Project
Thank you for your interest in contributing to thelunchproject!
 
There are many ways to contribute to the project, and we have many different needs to be addressed. 

## Development Setup
Before you begin editing the code, make sure you have [Node] and [Docker] installed

1. Fork/Clone the repository
2. Install dependencies with `npm install` in the *root* and *client* directories

With [Docker] installed

* Run `docker pull postgres`
* Run `docker run --name tlp-db -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres`

With [Node] installed

* Run `npm install` to install the dependencies.

## Development

Now that you're all set up, you're ready to edit the code.

1. Update files in the `server` and `client` folders
2. Build and start the client/server with `npm start`

### Commits
Commit messages should follow the format of a summary followed by the change type in a parenthesis:
	
> Error logging works now (patch)

Change types you can use are:
* major - Indicates breaking/incompatible features or changes
* minor - Indicates backwards-compatible features or changes
* patch - Indicates backwards-compatible bug fixes

## Database migrations
TODO

## Submitting a Pull Request

We gladly accept contributions via GitHub pull requests. Submit a pull request if you'd like to address an issue. Be sure to follow the [development guide](#development-setup)


[Node]: https://nodejs.org/en/docs/
[Docker]: https://www.docker.com