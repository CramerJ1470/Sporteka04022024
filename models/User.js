const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Array } = Schema.Types;
const { Transaction } = require("./Transaction");

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		require: false,
	},
	userid: {
		type: String,
		required: false,
	},
	transactions: {
		type: Array,
		required: false,
	},
	accountBalance: {
		type: Number,
		required: false,
	},
});

userSchema.methods = {
	matchPassword: function (password) {
		return bcrypt.compare(password, this.password);
	},
};

userSchema.pre("save", function (next) {
	if (this.isModified("password")) {
		bcrypt.genSalt(saltRounds, (err, salt) => {
			bcrypt.hash(this.password, salt, (err, hash) => {
				if (err) {
					next(err);
					return;
				}
				this.password = hash;
				next();
			});
		});
		return;
	}
	next();
});

module.exports = new Model("User", userSchema);
