const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Array } = Schema.Types;

const teamSchema = new Schema({
	id: {
		type: Number,
		required: true,
	},
	sport_id: {
		type: Number,
		required: true,
	},
	country_id: {
		type: Number,
		require: true,
	},
	venue_id: {
		type: Number,
		required: true,
	},
	venue_capacity: {
		type: Number,
		require: true,
	},
	gender: {
		type: String,
		required: false,
	},
	name: {
		type: String,
		required: false,
	},
	short_code: {
		type: String,
		required: false,
	},
	image_path: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	founded: Number,
	type: {
		type: String,
		required: false,
	},
	placeholder: {
		type: Boolean,
		required: false,
	},
	last_played_at: {
		type: String,
		required: false,
	},
	players: {
		type: Array,
		required: false,
	},
});

module.exports = new Model("Transaction", teamSchema);
