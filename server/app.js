var app = require('koa')();
var Router = require('koa-router');
var serve = require('koa-static-folder');
var rewrite = require('koa-rewrite');
var bodyParser = require('koa-body-parser');
var uuid = require('node-uuid');

var tasks = [{
	id: uuid.v1(),
	name: 'Task 1',
	completed: false
}, {
	id: uuid.v1(),
	name: 'Task 2',
	completed: false
}];

var router = new Router({
	prefix: '/api'
});

router
	.get('/tasks', function*(next) {
		this.body = {
			sucess: true,
			items: tasks
		};
	})
	.post('/tasks', function*(next) {
		if (this.request.accepts('json') !== 'json')
			this.throw(406, 'json only');

		var task = this.request.body;

		task.id = uuid.v1();
		task.completed = false;

		tasks.push(task);

		this.body = {
			success: true,
			items: tasks
		}
	})
	.put('/tasks/:id', function*(next) {
		var index = tasks.findIndex(function(task) {
				return task.id === this.params.id;
			}, this),
			task = this.request.body;

		if (index > -1) {
			tasks[index].completed = task.completed;
			tasks[index].name = task.name;
		}

		this.body = {
			success: true,
			items: tasks
		}
	})
	.del('/tasks/:id', function*(next) {
		tasks = tasks.filter(function(task) {
			return task.id !== this.params.id;
		}, this);

		this.body = {
			success: true,
			items: tasks
		}
	});


app
	.use(rewrite('/', '/index.html'))
	.use(rewrite('/*.(html|js|css)', '/app/$1.$2'))
	.use(serve('./app'))
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(3000);

console.log('App now listening at http://localhost:3000/');