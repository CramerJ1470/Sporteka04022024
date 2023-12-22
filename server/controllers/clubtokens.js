const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.ClubToken.find()
			.then((datas) => res.send(datas))
			.catch(next);
	},
    post:  (req, res, next) => {
			const { Key, smartContractAddress} = req.body;
			models.ClubToken.create({ Key, smartContractAddress})
				.then((createdClubToken) => res.send(createdClubToken))
				.catch(next);
		},
    
};