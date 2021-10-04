const db = require('./db');

const createTables = async () => {
	// 1) characters table
	await db.query(`DROP TABLE IF EXISTS characters`);
	await db.query(`CREATE TABLE characters(
    id                      SERIAL PRIMARY KEY,
    image                   VARCHAR(255) NOT NULL,
    name                    VARCHAR(30) NOT NULL,
    age                     INT NOT NULL,               
    weight                  INT NOT NULL,
    history                 VARCHAR
)`);

	await db.query(`DROP TABLE IF EXISTS genres`);
	await db.query(`CREATE TABLE genres (
  id                        SERIAL PRIMARY KEY,
  name                      VARCHAR(50) NOT NULL,                    
  image                     VARCHAR(255) NOT NULL
)`);

	// 2) movies table
	await db.query(`DROP TABLE IF EXISTS movies`);
	await db.query(`CREATE TABLE movies (
    id                        SERIAL PRIMARY KEY,
    name                      VARCHAR(50) NOT NULL,
    image                     VARCHAR(255) NOT NULL,
    release_year              INT NOT NULL,
    rating                    INT NOT NULL,
    character_id              SERIAL REFERENCES characters(id),
	genre_id				SERIAL REFERENCES genres(id)
  )`);

	// 3) movies character_movies table
	await db.query(`DROP TABLE IF EXISTS character_movies`);
	await db.query(`CREATE TABLE character_movies (
    id                        SERIAL PRIMARY KEY,
    movies_id                 SERIAL REFERENCES movies(id),
    character_id              SERIAL REFERENCES characters(id)          
  )`);

	// 4) genre table

	// 5) users table
	await db.query(`DROP TABLE IF EXISTS users`);
	await db.query(`CREATE TABLE users (
    id                         SERIAL PRIMARY KEY,
    username                   VARCHAR(20) NOT NULL,
    password                   VARCHAR NOT NULL,
    email                      VARCHAR(50) NOT NULL
    )`);

	console.log('Tables created in the database = [alkemy]');
};

createTables();
