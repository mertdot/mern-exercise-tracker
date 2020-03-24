
//we are using express to routing so we include it
const router = require('express').Router();
//mongoose module that we created
let User = require('../models/user.model');

//this is first routing that handles http get urls on the url 
router.route('/').get((req, res) => {
	User.find() //this line mongoose method to get all the users from mongoDB atlas
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: '+ err));
});
//this is http post request
router.route('/add').post((req, res) => {
	const username = req.body.username;

	const newUser = new User({username});

	newUser.save() //save database
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router; //standard line to export routing process