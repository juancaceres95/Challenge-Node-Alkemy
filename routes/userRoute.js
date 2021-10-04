const express = require('express');
const userController = require('../controllers/userController');
const userAuthController = require('../controllers/userAuthController');

const router = express.Router();

router.post('/register', userAuthController.signUp);
router.post('/login', userAuthController.login);

router
	.route('/')
	.get(userController.getAllUsers)
	.post(userController.createUser);

router
	.route('/:id')
	.get(userController.getUser)
	.patch(userController.updateUser)
	.delete(userController.deleteUser);

module.exports = router;
