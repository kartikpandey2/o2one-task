const  controllers = require('./controllers')

module.exports = (app) => {
	app.get('/', controllers.getUser)
	app.post('/', controllers.postUser)
	app.patch('/', controllers.updateUser)
}