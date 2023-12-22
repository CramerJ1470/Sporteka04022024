const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const { String, Number, Boolean, ObjectId } = Schema.Types;

const clubTokenSchema = new Schema({


"Key": {
    type: String,
    require: true,
},
 "smartContractAddress":{
    type: String,
    require: true,
 },
});
	
module.exports = new Model("ClubToken", clubTokenSchema);   