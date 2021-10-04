CREATE TABLE characters(
    id                      SERIAL PRIMARY KEY,
    image                   VARCHAR(255) NOT NULL,
    name                    VARCHAR(16) NOT NULL,
    age                     INT NOT NULL,               
    weight                  INT NOT NULL,
    history                 VARCHAR(255),
)

CREATE TABLE movies (
  id                        SERIAL PRIMARY KEY,
  name                      VARCHAR(50) NOT NULL,
  image                     VARCHAR(255) NOT NULL,
  release_date              INT NOT NULL,
  rating                    INT NOT NULL,
  character_id              SERIAL REFERENCES characters(id)          
);

CREATE TABLE character_movies (
  id                        SERIAL PRIMARY KEY,
  movies_id                 SERIAL REFERENCES movies(id)
  character_id              SERIAL REFERENCES characters(id)          
);

CREATE TABLE genres (
  id                        SERIAL PRIMARY KEY,
  name                      VARCHAR(50) NOT NULL,                    
  image                     VARCHAR(255) NOT NULL,
  movies_id                 SERIAL REFERENCES movies(id)
);

CREATE TABLE users (
  id                         SERIAL PRIMARY KEY,
  username                   VARCHAR(20) NOT NULL,
  password                   VARCHAR(20) NOT NULL,
  email                      VARCHAR(50) NOT NULL
  )