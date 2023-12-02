const jwt = require("jsonwebtoken");
require("dotenv").config();

function createToken(data) {
	return jwt.sign(data, process.env.SECRET, { expiresIn: "30h" });
}

function verifyToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}

module.exports = {
	createToken,
	verifyToken,
};
