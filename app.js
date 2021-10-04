const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

// routes ----------------------------------------------------------------
const charcterRoutes = require("./routes/characterRoute");
const movieRoutes = require("./routes/movieRoute");
const genreRoutes = require("./routes/genreRoute");
const userRoutes = require("./routes/userRoute");

// initialize app --------------------------------
dotenv.config({ path: ".env" });
const app = express();

// global middlewares ----------------------------------------------------------------
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": "*",
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(morgan('dev'));

// static files
app.use("/", express.static("build"));

// test
// app.use((req, res, next) => {
// 	// console.log(req.headers);
// 	res.header(
// 		'Access-Control-Allow-Origin',
// 		'https://amazing-boyd-36da7e.netlify.app'
// 	);
// 	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
// 	next();
// });

// mounting the routes -----------------------------------------
app.use("/api/v1/characters", charcterRoutes);
app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/genres", genreRoutes);
app.use("/api/v1/users", userRoutes);

// error handler --------------------------------
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "Something doesnt look good!",
    message: `Can't find the ${req.originalUrl} on this server!`,
  });
});

// export app --------------------------------
module.exports = app;
