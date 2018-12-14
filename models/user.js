const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		lowercase: true
	},
	phone_number: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true
	}
})

module.exports = mongoose.model('UserModel', UserSchema)