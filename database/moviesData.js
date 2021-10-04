const db = require('./db');

const popuplateMoviesTable = async () => {
	// 1)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id, genre_id) VALUES(
    100,
    'The Avengers',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    2012,
    9,
    103
  )`);

	// 2)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    101,
    'Snatch',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56mOJth6DJ6JhgoE2jtpilVqJO.jpg',
    2000,
    6,
    100
  )`);

	// 3)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    102,
    'The Meg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg',
    2018,
    7,
    100
  )`);

	// 4)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    103,
    'Fast & Furious 6',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg',
    2013,
    9,
    100
  )`);

	// 5)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    104,
    'Thor',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg',
    2011,
    8,
    105
  )`);

	// 6)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    105,
    'Men in Black: International',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg',
    2019,
    7,
    105
  )`);

	// 7)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    106,
    'Mad Max: Fury Road',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
    2015,
    9,
    101
  )`);

	// 8)

	await db.query(`INSERT INTO movies VALUES(
    107,
    'Venom',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
    2018,
    7,
    101
  )`);

	// 9)

	await db.query(`INSERT INTO movies VALUES(
    108,
    'Hitchcock',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zlG4QzB00VM6QHUmRkKaboCOgat.jpg',
    2018,
    8,
    102
  )`);

	// 10)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    109,
    'Rough Night',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ttC00xcQ5UIO04kU8y0h5OAIYYJ.jpg',
    2018,
    5,
    102
  )`);

	// 11)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    110,
    'The Judge',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tefUxj4Gg9hgQNgfEYd7kJQrIlD.jpg',
    2014,
    8,
    103
  )`);

	// 12)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    111,
    'San Andreas',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg',
    2015,
    9,
    104
  )`);

	// 13)

	await db.query(`INSERT INTO movies(id, name, image, release_year, rating, character_id) VALUES(
    112,
    'The Choice',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hf0uJ1oeILaQB3VfQ8KAXLghFrO.jpg',
    2016,
    6,
    104
  )`);

	// // movies table
	//   id                        SERIAL PRIMARY KEY,
	//   name                      VARCHAR(50) NOT NULL,
	//   image                     VARCHAR(255) NOT NULL,
	//   release_date              INT NOT NULL,
	//   rating                    INT NOT NULL,
	//   character_id              SERIAL REFERENCES characters(id)

	console.log('Sample movies data loded in the database = [alkemy]');
};

module.exports = popuplateMoviesTable;
