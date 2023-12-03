const mongoose = require("mongoose");
require("dotenv").config();
const env = process.env.NODE_ENV || "development";
//;

const config = {
	development: {
		port: process.env.PORT || 8090,
		dbURL: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster1.iukjd24.mongodb.net/Sporteka`,
		authCookieName: "x-auth-token",
	},
};


module.exports = () => {
	console.log(`dbURL: `, config.development.dbURL);
	return mongoose.connect(config.development.dbURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};
