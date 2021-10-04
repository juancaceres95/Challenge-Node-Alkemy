const { DataTypes } = require('sequelize');
const db = require('./../database/db');

const Movie = db.define(
	'movie',
	{
		// model attributes -
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		release_year: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			max: 5,
		},
		character_id: {
			type: DataTypes.INTEGER,
			foreignKey: true,
		},
		genre_id: {
			type: DataTypes.INTEGER,
			foreignKey: true,
		},
	},
	{ timestamps: false }
);

module.exports = Movie;
