const config = require("./config/config");
const dbConnection = require("./config/database");
const app = require("express")();
const createError = require("http-errors");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const { signupValidation, loginValidation } = require("./validation.js");
const express = require("express");

dbConnection()
	.then(() => {
		require("./config/express")(app);

		require("./config/routes")(app);
		app.use(express.json());

		app.use(function (err, req, res, next) {
			console.error(err);
			res.status(500).send(err.message);
			console.log("*".repeat(90));
		});
		app.use(bodyParser.json());

		app.use(
			bodyParser.urlencoded({
				extended: true,
			})
		);
		app.use((err, req, res, next) => {
			// console.log(err);
			err.statusCode = err.statusCode || 500;
			err.message = err.message || "Internal Server Error";
			res.status(err.statusCode).json({
				message: err.message,
			});
		});
		app.listen(
			config.port,
			console.log(`Listening on port ${config.port}!`)
		);
	})
	.catch(console.error);
