const { DataTypes } = require('sequelize');
const db = require('./../database/db');

const Genre = db.define(
	'genre',
	{
		// model attributes -
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: false }
);

module.exports = Genre;
