//Usual package importing.
const express = require('express');
const cors = require('cors');
//Mongoose to use mongoDB database in node.js app
const mongoose = require('mongoose');
//configures environment files in .end file.
require('dotenv').config();
//This two lines creates express server on 5000 port.
const app = express();
const port = process.env.PORT || 5000;
//Middleware
app.use(cors()); //this is cors middleware
app.use(express.json());//this is allow us to pars json 

//Database connection settings
//uri stands for where database is stored
// flags not important
const uri = process.env.ATLAS_URI;//probably procces.env using for importing variables inside of an .env file.
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
//when the connection established with mongoDB atlas it will console.log to say everything is going good.
connection.once('open', () => {
	console.log("MongoDB database connection established succesfully :)");
})

//say we will use these files in this file
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
//and use them
app.use('/exercises', exercisesRouter); //these means someone goes our root url and if type end of the url this '/exercises' server gonna load everything in the exercisesRouter
app.use('/users', usersRouter);

//This line here is what starts the server
app.listen(port, () =>{
	console.log(`Server is running on port: ${port}`);
});