const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const transactionSchema = new Schema({
	user: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "User",
	},
	tokentype: {
		type: String,
		required: true,
	},
	tokenvalue: {
		type: Number,
		require: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	date: {
		time: { type: Date, default: Date.now },
	},
	contractaddress: {
		type: String,
		required: false,
	},
});

module.exports = new Model("Transaction", transactionSchema);
