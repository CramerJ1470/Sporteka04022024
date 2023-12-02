const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.Transaction.find()
			.then((transactions) => res.send(transactions))
			.catch(next);
	},
	post: (req, res, next) => {
		const { user, tokentype, tokenvalue, quantity, date, contractaddress } =
			req.body;
		const { _id } = req.user;

		models.Transactions.create({
			user_id: _id,
			username: user,
			tokentype,
			tokenvalue,
			quantity,
			date,
			contractaddress,
		})
			.then((createdTransaction) => {
				return Promise.all([
					models.User.updateOne(
						{ _id },
						{ $push: { transactions: createdTransaction } }
					),
					models.Transaction.findOne({ _id: createdTransaction._id }),
				]);
			})
			.then(([modifiedObj, transactionObj]) => {
				res.send(transactionObj);
			})
			.catch(next);
	},
	// put: (req, res, next) => {
	// 	const id = req.params.id;
	// 	const { user, tokentype, tokenvalue, quantity, date, contractaddress } =
	// 		req.body;
	// 	models.Transaction.updateOne(
	// 		{ _id: id },
	// 		{ user, tokentype, tokenvalue, quantity, date, contractaddress }
	// 	)
	// 		.then((updatedTransaction) => res.send(updatedTransaction))
	// 		.catch(next);
	// },

	delete: (req, res, next) => {
		const id = req.params.id;
		models.Transaction.deleteOne({ _id: id })
			.then((removedTransaction) => res.send(removedTransaction))
			.catch(next);
	},
};
