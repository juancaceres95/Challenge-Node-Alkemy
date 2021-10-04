const express = require('express');
const movieController = require('../controllers/movieController');
const userAuthController = require('../controllers/userAuthController');

const router = express.Router();

// router
// 	.route('/')
// 	.get(userAuthController.protect, movieController.getAllMovies)
// 	.post(userAuthController.protect, movieController.createMovie);

// router
// 	.route('/:id')
// 	.get(userAuthController.protect, movieController.getMovie)
// 	.patch(userAuthController.protect, movieController.updateMovie)
// 	.delete(userAuthController.protect, movieController.deleteMovie);

router
	.route('/')
	.get(movieController.getAllMovies)
	.post(movieController.createMovie);

router
	.route('/:id')
	.get(movieController.getMovie)
	.patch(movieController.updateMovie)
	.delete(movieController.deleteMovie);

module.exports = router;
