const { DataTypes } = require('sequelize');
const db = require('./../database/db');
const Movie = require('./moviesModel');

const Character = db.define(
	'character',
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
		age: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		history: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{ timestamps: false }
);

module.exports = Character;
