# Billing Service

Backend technology used : Node.js/Express.js

service-to-service communication used : RabbitMQ

// run service npm run start:dev

// migrate npm run migrate

// seed npx sequelize-cli db:seed:all

//port : 202

//RABBITMQURL can be set on the env

Note

- billing-service runs every 5mins to publish a transaction to rabbitMq for seeded customer (with id 1)
