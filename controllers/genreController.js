const { QueryTypes } = require('sequelize');
const Genre = require('./../models/genreModel');
const db = require('../database/db');

// get all genre
exports.getAllGenre = async (_, res) => {
	const genres = await Genre.findAndCountAll();

	res.status(200).json({
		genres,
	});
};

// get a single genre
exports.getGenre = async (req, res) => {
	const genreId = await req.params.id;
	const genre = await Genre.findOne({
		where: { id: genreId },
	});

	res.status(200).json({
		genre,
	});
};

// create a new genre
exports.createGenre = async (req, res) => {
	const genre = await Genre.create({
		image: req.body.image,
		name: req.body.name,
	});

	res.status(201).json({
		status: 'success',
		message: 'New genre created!',
		genre,
	});
};

// update a genre
exports.updateGenre = async (req, res) => {
	const genreToUpdateId = await req.params.id;

	// 1) find the genre
	const genre = await Genre.findOne({
		where: { id: genreToUpdateId },
	});

	// 2) update the genre
	await db.query(
		`UPDATE genres SET
		name = '${req.body.name || genre.name}',
		image = '${req.body.image || genre.image}',
				
		WHERE id = '${genreToUpdateId}'`,
		{ type: QueryTypes.UPDATE }
	);

	res.status(201).json({
		status: 'success',
		message: 'Genre updated!',
	});
};

// delete a genre
exports.deleteGenre = async (req, res) => {
	const genreToDelete = req.params.id;

	await Genre.destroy({
		where: { id: genreToDelete },
	});

	res.status(200).json({
		status: 'success',
		message: 'Genre deleted!',
	});
};
