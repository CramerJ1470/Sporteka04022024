require("dotenv").config();
const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 80,
		dbURL: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster1.nymha.mongodb.net/Pixar1`,
		authCookieName: "x-auth-token",
	},
};

module.exports = config[env];
