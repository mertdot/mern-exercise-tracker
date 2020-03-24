//we are identfying which packages we will use in this file.
const mongoose = require('mongoose');

//init mongoose.Schema
const Schema = mongoose.Schema;

//created new schema named userSchema and has only one field
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true, //whitespace off
		minlength: 3
	},
},	{
	timestamps: true,
});

//creat model as we give metrics upper side
const User = mongoose.model('User', userSchema);
//export this model
module.exports = User;