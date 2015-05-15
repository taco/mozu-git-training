var Router = require('koa-router');

var tasks = require('./tasks')

module.exports = function(app) {

	tasks.loadDefaultTasks();

	var router = new Router({
		prefix: '/api'
	});

	router
		.get('/tasks', function*(next) {
			this.body = {
				sucess: true,
				items: tasks.list()
			};
		})
		.post('/tasks', function*(next) {
			if (this.request.accepts('json') !== 'json')
				this.throw(406, 'json only');

			tasks.add(this.request.body)

			this.body = {
				success: true,
				items: tasks.list()
			}
		})
		.put('/tasks/:id', function*(next) {
			tasks.update(this.params.id, this.request.body);

			this.body = {
				success: true,
				items: tasks.list()
			}
		})
		.del('/tasks/:id', function*(next) {
			tasks.remove(this.params.id);

			this.body = {
				success: true,
				items: tasks.list()
			}
		});

	app
		.use(router.routes())
		.use(router.allowedMethods())
}