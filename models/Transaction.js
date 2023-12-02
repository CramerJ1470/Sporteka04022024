const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const transactionSchema = new Schema({
	username: {
		type: String,
		required: true,
		
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
		type: Date,
		require: false,
	},
	contractaddress: {
		type: String,
		required: false,
	},
});

module.exports = new Model("Transaction", transactionSchema);
