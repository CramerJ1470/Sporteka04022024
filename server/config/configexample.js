const env = process.env.NODE_ENV || "development";
require("dotenv").config();

const config = {
	development: {
		port: process.env.PORT || 8090,
		dbURL: "mongodb+srv://<username>:<password>@cluster1.nymha.mongodb.net/<database>",
		authCookieName: "x-auth-token",
	},
};

module.exports = config[env];
