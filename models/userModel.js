const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
// const hash = require('hash');

const db = require('./../database/db');

const User = db.define(
	'user',
	{
		// model attributes -
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(120),
			allowNull: false,
		},
	},

	{
		timestamps: false,
	}
);

// encrypt the password befoe save
User.beforeCreate(async function (user) {
	user.password = await bcrypt.hash(user.password, 10);
});

// check for correct password - returns true if correct
User.prototype.correctPassword = async function (password, hashedPassword) {
	return await bcrypt.compare(password, hashedPassword);
};

module.exports = User;
