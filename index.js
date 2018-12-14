const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect('mongodb://localhost:27017/userApp');

//Middleware
app.use(bodyParser.json())

//Routes
const routes = require('./routes')
routes(app)

app.listen('3000', () => {
	console.log('Server started at 3000')
})