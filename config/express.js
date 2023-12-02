const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const secret = "secret";
require("dotenv").config();

module.exports = (app) => {
	app.use(cors());

	app.use(bodyParser.json());

	app.use(cookieParser(process.env.EXPRESS_SECRET));
};
