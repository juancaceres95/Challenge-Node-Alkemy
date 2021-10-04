const { QueryTypes } = require('sequelize');
const Movie = require('./../models/moviesModel');
const db = require('../database/db');

// get all movies
exports.getAllMovies = async (req, res) => {
	const query = req.query;

	// get all movies
	const movies = await Movie.findAll({
		attributes: { exclude: ['id', 'rating', 'character_id'] },
	});

	// 1. filter movies by name
	if (query.name) {
		const filteredMoviesByName = movies.filter(
			(movie) => movie.name.toLowerCase() === query.name.toLowerCase()
		);
		filteredMoviesByName.map((mov) => delete mov.dataValues['genre_id']);
		return res.status(200).json({ filteredMoviesByName });
	}

	// 2. filter movies by genreId
	if (query.genre) {
		const filteredMoviesByGenreId = movies.filter(
			(movie) => movie.genre_id === +query.genre
		);

		filteredMoviesByGenreId.map((mov) => delete mov.dataValues['genre_id']);
		return res.status(200).json({ filteredMoviesByGenreId });
	}

	// 3. order movies by ASC || DESC
	if (query.order && query.order === 'ASC') {
		// ASC order
		const orderMovies = movies.sort((a, b) => a.release_year - b.release_year);

		orderMovies.map((mov) => delete mov['genre_id']);
		return res.status(200).json({ orderMovies });

		// DESC order
	} else if (query.order && query.order === 'DESC') {
		const orderMovies = movies.sort((a, b) => b.release_year - a.release_year);

		orderMovies.map((mov) => delete mov.dataValues['genre_id']);
		return res.status(200).json({ orderMovies });
	}

	// 4. send default moviesList
	// movies.map((mov) => delete mov.dataValues['genre_id']);

	res.status(200).json({
		movies,
	});
};

// get a single movie
exports.getMovie = async (req, res) => {
	const movieId = await req.params.id;
	const movie = await Movie.findOne({
		where: { id: movieId },
	});

	res.status(200).json({
		movie,
	});
};

// create a new movie
exports.createMovie = async (req, res) => {
	const movie = await Movie.create({
		image: req.body.image,
		name: req.body.name,
		release_year: req.body.release_year,
		rating: req.body.rating,
		character_id: req.body.character_id,
	});

	res.status(201).json({
		status: 'success',
		message: 'New movie created!',
		movie,
	});
};

// update a mpvie
exports.updateMovie = async (req, res) => {
	const movieToUpdateId = await req.params.id;

	// 1) find the movie
	const movie = await Movie.findOne({
		where: { id: movieToUpdateId },
	});

	// 2) update the movie
	await db.query(
		`UPDATE movies SET
		name = '${req.body.name || movie.name}',
		image = '${req.body.image || movie.image}',
		release_year = ${req.body.release_year || movie.release_year},
		rating = ${req.body.rating || movie.rating},
		character_id = '${req.body.character_id || movie.character_id}'
				
		WHERE id = '${movieToUpdateId}'`,
		{ type: QueryTypes.UPDATE }
	);

	res.status(201).json({
		status: 'success',
		message: 'Movie updated!',
	});
};

// delete a movie
exports.deleteMovie = async (req, res) => {
	const movieToDelete = req.params.id;

	await Movie.destroy({
		where: { id: movieToDelete },
	});

	res.status(200).json({
		status: 'success',
		message: 'Movie deleted!',
	});
};
