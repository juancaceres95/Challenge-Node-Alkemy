const popuplateMoviesTable = require("./moviesData");
const popuplateCharactersTable = require("./characterData");
const popuplateGenresTable = require("./genresData");

const populateDatabase = async () => {
  await popuplateCharactersTable();
  // await popuplateMoviesTable();
  await popuplateGenresTable();
};

populateDatabase();
