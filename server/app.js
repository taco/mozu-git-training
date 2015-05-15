var app = require('koa')();

var serve = require('koa-static-folder');
var rewrite = require('koa-rewrite');
var bodyParser = require('koa-body-parser');
var routes = require('./routes')

app
	.use(rewrite('/', '/index.html'))
	.use(rewrite('/*.(html|js|css)', '/app/$1.$2'))
	.use(serve('./app'))
	.use(bodyParser());

routes(app);

app.listen(3000);

console.log('App now listening at http://localhost:3000/');