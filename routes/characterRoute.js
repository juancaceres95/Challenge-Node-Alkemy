const express = require('express');
const characterController = require('./../controllers/characterController');
const userAuthController = require('./../controllers/userAuthController');

const router = express.Router();

// router
// 	.route('/')
// 	.get(userAuthController.protect, characterController.getAllcharacters)
// 	.post(characterController.createACharacter);

// router
// 	.route('/:id')
// 	.get(userAuthController.protect, characterController.getCharacter)
// 	.patch(userAuthController.protect, characterController.updateCharacter)
// 	.delete(userAuthController.protect, characterController.deleteACharacter);

router
	.route('/')
	.get(characterController.getAllcharacters)
	.post(characterController.createACharacter);

router
	.route('/:id')
	.get(characterController.getCharacter)
	.patch(characterController.updateCharacter)
	.delete(characterController.deleteACharacter);

module.exports = router;
