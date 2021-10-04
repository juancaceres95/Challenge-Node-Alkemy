const db = require('./db');

const popuplateCharactersTable = async () => {
	// 1)

	await db.query(`INSERT INTO characters(id, image, name, age, weight, history) VALUES(
    100,
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
    'Jason Statham',
    53,
    90,
    'Jason Statham (born 26 July 1967) is an English actor and martial artist, known for his roles in the Guy Ritchie crime films Lock, Stock and Two Smoking Barrels; Revolver; and Snatch.'
  )`);

	// 2)

	await db.query(`INSERT INTO characters(id, image, name, age, weight, history) VALUES(
    101,
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yVGF9FvDxTDPhGimTbZNfghpllA.jpg',
    'Tom Hardy',
    43,
    95,
    'Edward Thomas "Tom" Hardy (born 15 September 1977) is an English actor. He is best known for playing the title character in the 2009 British film Bronson, and for his roles in the films Star Trek Nemesis, RocknRolla, and Inception. He has been cast in the Christopher Nolan film The Dark Knight Rises as Bane.'
  )`);

	// 3)

	await db.query(`INSERT INTO characters(id, image, name, age, weight, history) VALUES(
    102,
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
    'Scarlet Johansson',
    36,
    56,
    'Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppolas Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.'
  )`);

	// 4)

	await db.query(`INSERT INTO characters(id, image, name, age, weight, history) VALUES(
    103,
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
    'Robert Downey Jr.',
    56,
    85,
    'Robert John Downey Jr. (born April 4, 1965) is an American actor and producer. Downey made his screen debut in 1970, at the age of five, when he appeared in his fathers film Pound, and has worked consistently in film and television ever since. He received two Academy Award nominations for his roles in films Chaplin (1992) and Tropic Thunder (2008).'
  )`);

	// 5)

	await db.query(`INSERT INTO characters(id, image, name, age, weight, history) VALUES(
    104,
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg',
    'Alexandra Daddario',
    35,
    52,
    'Alexandra Anna Daddario is an American actress. She is known for playing Annabeth Chase in the Percy Jackson film series, Blake Gaines in San Andreas (2015), Summer Quinn in Baywatch (2017), Emma Corrigan in Can You Keep a Secret?, and Alexis Butler in We Summon the Darkness (both 2019).'
  )`);

	// 6)

	await db.query(`INSERT INTO characters(id, image, name, age, weight, history) VALUES(
    105,
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg',
    'Chris Hemsworth',
    37,
    87,
    'Chris Hemsworth (born 11 August 1983) is an Australian actor. He is best known for his roles as Kim Hyde in the Australian TV series Home and Away (2004) and as Thor in the Marvel Cinematic Universe films Thor (2011), The Avengers (2012), Thor: The Dark World (2013), Avengers: Age of Ultron (2015), Thor: Ragnarok (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019), and the upcoming Thor: Love and Thunder (2022).'
  )`);

	//     id                      SERIAL PRIMARY KEY,
	//     image                   VARCHAR(255) NOT NULL,
	//     name                    VARCHAR(16) NOT NULL,
	//     age                     INT NOT NULL,
	//     weight                  INT NOT NULL,
	//     history                 VARCHAR(255)

	console.log('Sample characters data loaded in the database = [alkemy]');
};

module.exports = popuplateCharactersTable;
