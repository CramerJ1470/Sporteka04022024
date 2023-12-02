require("dotenv").config();
const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 8080,
		dbURL: `mongodb+srv://JohnnyTwoShoes:Test123@cluster1.iukjd24.mongodb.net/Sporteka`,
		authCookieName: "x-auth-token",
	},
};

module.exports = config[env];
