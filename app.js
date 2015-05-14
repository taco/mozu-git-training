var app = require('koa')();
var router = require('koa-router')();
var serve = require('koa-static-folder');

router
	.get('/', function*(next) {
		this.status = 307;
		this.redirect('/app/index.html')
	})
	.get('/tasks', function*(next) {
		this.body = 'Hello Stuff!';
	})
	.post('/tasks', function*(next) {
		// ...
	})
	.put('/tasks/:id', function*(next) {
		// ...
	})
	.del('/tasks/:id', function*(next) {
		// ...
	});



app
	.use(serve('./app'))
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(3000);

console.log('App now listening at http://localhost:3000/');