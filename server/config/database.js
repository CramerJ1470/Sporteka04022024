const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";
require("dotenv").config();

module.exports = async () => {
	const config = {
		development: {
			port: process.env.PORT || 8090,
			dbURL: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster1.iukjd24.mongodb.net/Sporteka`,
			authCookieName: "x-auth-token",
			AUTHENTICATION_DATABASE: null,
			DATABASE_SSL: true,
		},
	};
	console.log(config.development.dbURL);
	return await mongoose.connect(config.development.dbURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		serverSelectionTimeoutMS,
	}).catch(err=> console.log(`err:`,err));
};
