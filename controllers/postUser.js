const userModel = require('../models/user')

const validateBody = (body, res) => {
	try {
		if(!body.name) {
			res.status(400).json({ status: false, message: 'Name cannot be empty'})
		}
		if(!body.phone_number) {
			res.status(400).json({ status: false, message: 'Phone Number cannot be empty'})
		}
		if(!body.email) {
			res.status(400).json({ status: false, message: 'Email cannot be empty'})
		}
	}
	catch(err) {
		return err
	}
}

module.exports = async (req, res) => {
	try{
		const body = req.body
		isResponseSent = validateBody(body, res)
		if(!isResponseSent) {
			let newUser = new userModel({
				name: body.name,
				phone_number: body.phone_number,
				email: body.email
			})
			newUser = await newUser.save()
			res.status(200).json({ status: true, message: 'user saved'})	
		}
	}
	catch(err) {
		console.log(err)
		res.status(504).json({ status: false, message: 'Something went wrong'})
	}
}