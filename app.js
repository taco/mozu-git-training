var app = require('koa')();
var router = require('koa-router')();

// app.use(function*() {
// 	this.body = "Hello World !!!";
// });

router
	.get('/', function*(next) {
		this.body = 'Hello World!';
	})
	.get('/stuff', function*(next) {
		this.body = 'Hello Stuff!';
	})
	.post('/users', function*(next) {
		// ...
	})
	.put('/users/:id', function*(next) {
		// ...
	})
	.del('/users/:id', function*(next) {
		// ...
	});

app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(3000);

console.log('App now listening at http://localhost:3000/');