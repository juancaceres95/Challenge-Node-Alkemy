const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const db = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	}
);

// const db = new Sequelize(process.env.DATABASE_URL, {
// 	dialect: 'postgres',
// 	ssl: {
// 		rejectUnauthorized: false,
// 	},
// });

module.exports = db;
