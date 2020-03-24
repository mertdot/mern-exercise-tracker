//we are using express to routing so we include it
const router = require('express').Router();
//mongoose module that we created
let Exercise = require('../models/exercise.model');

//same as users.js we say if it is that url you will find exercises and return us as json document
router.route('/').get((req, res) => {
	Exercise.find() //this line finds all exercises
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration); //Number is using converting inside to number format
	const date  = Date.parse(req.body.date); //Change requested date to Date
	//creating newExercise that we identfied above (üst)
	const newExercise = new Exercise({
		username,
		description,
		duration,
		date,
	})

//we saved
newExercise.save()
	.then(() => res.json('Exercise added!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Exercise.findById(req.params.id) //this line finds only which id requested.
		.then(exercise => res.json(exercise))
		.catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res) => {
	Exercise.findByIdAndDelete(req.params.id) //this line finds only which id requested.
		.then(() => res.json('Exercise deleted.'))
		.catch(err => res.status(400).json('Error' + err));
});
router.route('/update/:id').post((req, res) => {
	Exercise.findById(req.params.id) //this line finds only which id requested.
		.then(exercise => {
			exercise.username = req.body.username;
			exercise.description = req.body.description;
			exercise.duration = Number(req.body.duration);
			exercise.date = Date.parse(req.body.date);

		exercise.save()
			.then(() => res.json('Exercise updated!'))
			.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
		.catch(err => res.status(400).json('Error' + err));
});

module.exports = router;