const env = process.env.NODE_ENV || "development";
console.log(process.env.PASSWORD);

const config = {
	development: {
		// port: process.env.PORT || 8090,
		dbURL: `mongodb+srv://john:${process.env.PASSWORD}@cluster1.iukjd24.mongodb.net/`,
		authCookieName: "x-auth-token",
	},
};

module.exports = config[env];