var app = require('koa')();
var router = require('koa-router')();
var serve = require('koa-static-folder');
var rewrite = require('koa-rewrite');

router
	// .get('/', function*(next) {
	// 	this.status = 307;
	// 	this.redirect('/app/index.html')
	// })
	.get('/api/tasks', function*(next) {
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
	.use(rewrite('/*.(html|js|css)', '/app/$1.$2'))
	.use(serve('./app'))

	.use(router.routes())
	.use(router.allowedMethods())
	.listen(3000);

console.log('App now listening at http://localhost:3000/');