const express = require('express');
const genreController = require('../controllers/genreController');
const userAuthController = require('../controllers/userAuthController');

const router = express.Router();

// router
// 	.route('/')
// 	.get(userAuthController.protect, genreController.getAllGenre)
// 	.post(userAuthController.protect, genreController.createGenre);

// router
// 	.route('/:id')
// 	.get(userAuthController.protect, genreController.getGenre)
// 	.patch(userAuthController.protect, genreController.updateGenre)
// 	.delete(userAuthController.protect, genreController.deleteGenre);

router
	.route('/')
	.get(genreController.getAllGenre)
	.post(genreController.createGenre);

router
	.route('/:id')
	.get(genreController.getGenre)
	.patch(genreController.updateGenre)
	.delete(genreController.deleteGenre);

module.exports = router;
