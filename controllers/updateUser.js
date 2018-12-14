const userModel = require('../models/user')

module.exports = async (req, res) => {
	try{
		const updateObj = {}, body = req.body
		if(!body._id) {
			res.status(400).json({ status: false, message: 'ID not found'})
		}
		if(body.name) {
			updateObj.name = body.name
		}
		if(body.phone_number) {
			updateObj.phone_number = body.phone_number
		}
		if(body.email) {
			updateObj.email = body.email
		}
		const updatedUser = await userModel.findOneAndUpdate({ _id: body._id }, updateObj, { new: true })
		res.status(200).json({ status: true, data: updatedUser})
	}
	catch(err) {
		console.log(err)
		res.status(504).json({ status: false, message: 'Something went wrong'})
	}
}