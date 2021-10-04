const db = require('./database/db');

const app = require('./app');

// database test connection
const testDatabaseConnection = async function () {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

testDatabaseConnection();

// opening the server
const PORT = process.env.PORT;

// app.listen(PORT);

// const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening at port: ${PORT}`);
});
