var Koa = require('koa');
var app = new Koa();
const main = ctx => {
    ctx.response.body = 'Hello World';
};

app.use(main);

app.listen(5641);