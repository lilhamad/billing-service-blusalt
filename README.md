# Billing Service

Backend technology used : Node.js/Express.js

service-to-service communication used : RabbitMQ

# Steps to run Billing service 

- create .env and paste this content

	PORT = 202
	BILLING_SERVICE_URL = http://localhost:202/api/v1/transaction/create
	DB_URL=mysql://root:Admin@1234@127.0.0.1/billings_db
	transactionQueueName = transactionsQueue

- create a database called "billings_db"
- replace DB_URL in the env file with : your database credentials.
  root : your db user
  Admin@1234 : your db password
  billings_db : your db name
  mysql : your dialect
  127.0.0.1 : your db host

Run locally

// migrate : npm run migrate

// run service : npm run start:dev

Run on docker
// run service : docker-compose up
// you might have to settup your database info on dockerFile and docker-compose.yml
