const UserModel = require('../models/user')

module.exports = async (req, res) => {
	try{
		const query = {}
		if(req.query.id) {
			query['_id'] = req.query.id
		}
		const userData = await UserModel.find(query)
		res.status(200).json({ status: true, data: userData})
	}
	catch(err) {
		console.log(err)
		res.status(504).json({ status: false, message: 'Something went wrong'})
	}
}