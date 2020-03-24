//we are identfying which packages we will use in this file.
const mongoose = require('mongoose');

//init mongoose.Schema
const Schema = mongoose.Schema;

//created new schema named userSchema and has only one field
const exerciseSchema = new Schema({
	username: { type: String, required: true },
	description: { type: String, required: true },
	duration: { type: Number, required: true },
	date: { type: Date, required: true },
},	{
	timestamps: true,
});

//creat model as we give metrics upper side
const Exercise = mongoose.model('Exercise', exerciseSchema);
//export this model
module.exports = Exercise;