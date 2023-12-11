const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Standings.find()
			.then((datas) => res.send(datas))
			.catch(next);
	},
};