const jwt = require("jsonwebtoken");
const models = require("../models");
require("dotenv").config();

let testToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWJlMGZhN2IzNDFhNTY1MGViMDVkYSIsImlhdCI6MTY0Njc5NzI4MywiZXhwIjoxNjQ3MTU3MjgzfQ.UgbCSwUGmtV8EOcmGaw7ClUg4BetJ7ZcN72-YvmX7JU";

function verifyToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.SECRET, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		});
	});
}
console.log(verifyToken(testToken));
console.log(`hey now: `, models.TokenBlacklist.findOne({ testToken }));
