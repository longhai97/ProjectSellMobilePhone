const Koa = require('koa');
const nunjuck = require('./nunjucks.provider');
const routerLogin = require('./router/RouterLogin');

const app = new Koa();

app.use(nunjuck());
app.use(routerLogin.routes());
app.listen(6060);