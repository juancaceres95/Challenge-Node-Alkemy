const { QueryTypes, Sequelize } = require('sequelize');
const User = require('./../models/userModel');

const db = require('../database/db');
// get all users
exports.getAllUsers = async (req, res) => {
	const users = await User.findAll({
		// attributes: {
		// 	exclude: ['password'],
		// },
	});

	res.status(200).json({
		users,
	});
};

// get a single user
exports.getUser = async (req, res) => {
	const userId = req.params.id;
	const user = await User.findOne({
		where: { id: userId },

		attributes: {
			exclude: ['password'],
		},
	});

	res.status(200).json({
		user,
	});
};

// create a new user
exports.createUser = async (req, res) => {
	const user = await User.create({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
	});

	await console.log(user.getDataValue('username'));
	res.status(201).json({
		message: 'User created',
		user,
	});
};

// update user
exports.updateUser = async (req, res) => {
	const userToUpdateId = req.params.id;

	// 1) find the user
	const user = await User.findOne({
		where: { id: userToUpdateId },
	});

	// 2) update the user
	await db.query(
		`UPDATE users SET
		username = '${req.body.username || user.name}',
		password = '${req.body.password || user.password}',
		email = '${req.body.email || user.email}'
				
		WHERE id = '${userToUpdateId}'`,
		{ type: QueryTypes.UPDATE }
	);

	res.status(201).json({
		status: 'success',
		message: 'User updated!',
	});
};

// delete user
exports.deleteUser = async (req, res) => {
	const userToDelete = req.params.id;
	const deletedUser = await db.query(
		`DELETE FROM users WHERE id = '${userToDelete}'`,
		{ type: QueryTypes.DELETE }
	);

	res.status(200).json({
		message: deletedUser,
	});
};
