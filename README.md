# Challenge-Node-Alkemy

## Alkemy code challenge

This project is based on the Node.js challenge by Alkemy.

### Tools used

- Node.js
- Express
- PostgreSql
- Sequelize
- SendGrid Mail

### Follow below mentioned steps for running this project locally

- Clone this project on your local machine and run `npm install` to insatll dependencies.

- Create a database `sql || sqlite || postgres (any one of your choice). This project is bas
on PostgreSql.`

- Get your sendgrid API Key [here.](https://sendgrid.com/docs/for-developers/)

- Create `.env` file in root project and add:

  ```
  PORT=********
  DB_DATABASE=YOUR DATABASE NAME
  DB_PASSWORD=YOUR DATABASE PASSWORD
  DB_HOST=YOUR DATABASE HOST NAME
  DB_DIALECT= sql || sqlite || postgres (any one of your choice). This project is based on 
PostgreSql.
  EMAIL_FROM=YOUR VERIFIED SENDER EMAIL ON SENDGRID
  SENDGRID_API_KEY=YOUR SENDGRID_API_KEY

  ```

- run `node database/dbSetUp.js` to create tables in your database.

- run `node database/populateDatabase.js` to populate the database with sample data.

You app is ready to be started!

- run `nodemon server.js` to start the server
