const env = process.env.NODE_ENV || "development";


const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

function createToken(data) {
	return jwt.sign(data, secret, { expiresIn: "30h" });
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
