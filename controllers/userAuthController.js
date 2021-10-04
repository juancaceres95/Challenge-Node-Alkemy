const { promisify } = require('util');
// const sgMail = require('@sendgrid/mail');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const signToken = (id) => {
	return jwt.sign({ id: id }, 'privateKey', {
		expiresIn: '30 days',
	});
};

exports.signUp = async (req, res) => {
	// encrypt the password
	const newUser = await User.create({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
	});

	// generate secure token
	const token = signToken(newUser.id);

	// send email to user
	// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	// const msg = {
	// 	to: `${req.body.email}`, // Change to your recipient
	// 	from: process.env.email, // Change to your verified sender
	// 	subject: 'Email subject',
	// 	text: 'Email Body',
	// 	html: '<strong>HTML content - optional</strong>',
	// };

	// sgMail
	// 	.send(msg)
	// 	.then(() => {heroku log
	// 		console.log('Email sent');
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});

	res.status(201).json({
		message: 'User created',
		token,
		newUser,
	});
};

exports.login = async (req, res) => {
	const { username, password } = await req.body;

	// check email and password exists
	if (!username && !password) {
		return res.json({ error: 'Authentication fail' });
	}

	// check for user in the database & password is correct
	const user = await User.findOne({
		where: {
			username: username,
		},
	});

	// compare password
	const match = await user.correctPassword(password, user.password);

	// if everything ok, send token to client
	if (!match) {
		res.status(404).json({ message: 'Incorrect password or email!' });
	} else {
		const token = signToken(user.id);
		res.json({
			token,
			message: 'success',
		});
	}
};

exports.protect = async (req, res, next) => {
	let token;
	// get token
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = await req.headers.authorization.split(' ')[1];
		// console.log(token);
	}

	// send error if no token
	if (!token) {
		return res
			.status(401)
			.json('You are not logged in. Please log in to get access!');
	}
	// validate token
	let decoded;
	try {
		decoded = await promisify(jwt.verify)(token, 'privateKey');
	} catch (error) {
		return res.status(401).json({
			error: `${error.name}`,
			message: `${error.message}. Please log in!`,
		});
	}

	// console.log( decoded );

	// if validation passes check for user in the database
	const user = await User.findOne({
		where: {
			id: decoded.id,
		},
	});

	if (!user) {
		return res
			.status(401)
			.json({ error: 'The user with the token does not exist!' });
	}

	next();
};
