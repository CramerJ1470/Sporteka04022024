// require("dotenv").config();
// const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 443,
		dbURL: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster1.iukjd24.mongodb.net/Sporteka`,
		authCookieName: "x-auth-token",
	},
// };
// const db = require("./key").mongoURI;

// mongoose
// 	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
// 	.then(() => console.log("MongoDB connected"))
// 	.catch((err) => console.log(err));
// module.exports = config[env];
