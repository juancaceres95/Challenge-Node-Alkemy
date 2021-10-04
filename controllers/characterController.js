const { QueryTypes } = require('sequelize');
const Character = require('./../models/charactersModel');
const db = require('../database/db');

// get all characters
exports.getAllcharacters = async (req, res) => {
	const query = req.query;

	// 1. get all characters
	const [characters] =
		await db.query(`select c.name, age, weight, history, c.image, array_agg(m.name) as movie_names 
	from characters c
	join movies m on m.character_id = c.id
	group by c.id`);

	// 2. filter by name
	if (query.name) {
		const filterdCharactersByName = characters.filter(
			(character) => character.name.toLowerCase() === query.name.toLowerCase()
		);
		return res.status(200).json({ filterdCharactersByName });
	}

	// 3. filter by age
	if (query.age) {
		const filterdCharactersByAge = characters.filter(
			(character) => character.age === +query.age
		);
		return res.status(200).json({
			filterdCharactersByAge,
		});
	}

	// 4. filter by movieId
	if (query.movies) {
		const [filterdCharactersByMovies] =
			await db.query(`select c.name, age, weight, history, c.image, array_agg(m.name) as movie_names 
		from characters c
		join movies m on m.character_id = c.id
		where m.id = ${query.movies}
		group by c.id`);
		return res.status(200).json({ filterdCharactersByMovies });
	}

	res.status(200).json({
		characters,
	});
};

// get a single character
exports.getCharacter = async (req, res) => {
	const characterId = req.params.id;
	const character = await Character.findOne({
		where: { id: characterId },
	});

	res.status(200).json({
		character,
	});
};

// create a new character
exports.createACharacter = async (req, res) => {
	const character = await Character.create({
		image: req.body.image,
		name: req.body.name,
		age: req.body.age,
		weight: req.body.weight,
		history: req.body.history,
	});

	res.status(201).json({
		status: 'success',
		message: 'New character created!',
		character,
	});
};

// update a character
exports.updateCharacter = async (req, res) => {
	const characterToUpdateId = await req.params.id;

	// 1) find the character
	const character = await Character.findOne({
		where: { id: characterToUpdateId },
	});

	// 2) update the character
	await db.query(
		`UPDATE characters SET
		name = '${req.body.name || character.name}',
		image = '${req.body.image || character.image}',
		age = ${req.body.age || character.age},
		weight = ${req.body.weight || character.weight},
		history = '${req.body.history || character.history}'
				
		WHERE id = '${characterToUpdateId}'`,
		{ type: QueryTypes.UPDATE }
	);

	res.status(201).json({
		status: 'success',
		message: 'Character updated!',
	});
};

// delete a character
exports.deleteACharacter = async (req, res) => {
	const characterToDelete = req.params.id;

	await Character.destroy({
		where: { id: characterToDelete },
	});

	res.status(200).json({
		status: 'success',
		message: 'Character deleted!',
	});
};
