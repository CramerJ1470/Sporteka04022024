const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const { String, Number, Boolean, ObjectId } = Schema.Types;

const standingsSchema = new Schema({


"id": {
    type: Number,
    require: true,
},
 "sport_id":{
    type: Number,
    require: true,
 },
    "league_id":{
        type: Number,
        require: true,
    },
    "season_id":{
        type: Number,
        require: true,
    }, 
    "stage_id": {
        type: Number,
        require: true,
    },
    "group_id": {
        type: Number,
        require: true,
    },
    "round_id": {
        type: Number,
        require: true,
    },
    "participant_id": {
        type: Number,
        require: true,
    },
    "standing_rule_id":{
        type: Number,
        require: true,
    },
    "position": {
        type: Number,
        require: true,
    },
    "points": {
        type: Number,
        require: true,
    },
    "result": {
        type: String,
        require: true,
    },
});
	
module.exports = new Model("Standings", standingsSchema);   