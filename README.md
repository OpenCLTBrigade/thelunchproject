# The Lunch Project


## Server Configuration Setup
docker pull mysql
docker run --name db-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=UNCCrugby_49 -d mysql

#installation to do db migrations
npm install -g sequelize-cli
npm install -g mysql2

#command to update database with latest migrations.
sequelize db:migrate

#command to create databae migrations
sequelize migration:create
