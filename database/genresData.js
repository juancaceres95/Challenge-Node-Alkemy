const db = require("./db");

const popuplateGenresTable = async () => {
  // 1)

  await db.query(`INSERT INTO genres(id, name, image) VALUES(
    100,
    'Aventura',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/trnyoKkkvvjZvRvCMrNDtSf25nH.jpg'
  )`);

  // 2)
  await db.query(`INSERT INTO genres(id, name, image) VALUES(
    101,
    'Documental',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kv51ZQ6PlJqMA2RylQRRCWW0yFM.jpg'
  )`);

  // 3)
  await db.query(`INSERT INTO genres(id, name, image) VALUES(
    102,
    'Comedia',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tNFBP5OTmKm7CTc5ptUwgmepd8G.jpg'
  )`);

  // id                        SERIAL PRIMARY KEY,
  // name                      VARCHAR(50) NOT NULL,
  // image                     VARCHAR(255) NOT NULL,
  // movies_id                 SERIAL REFERENCES movies(id)

  console.log("Sample genres data loded in the database = [alkemy]");
};

module.exports = popuplateGenresTable;
