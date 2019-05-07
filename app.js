const Koa         = require('koa');
const nunjuck     = require('./nunjucks.provider');
const routerLogin = require('./router/RouterLogin');
const serve       = require('koa-static');
const path        = require('path');
const staticPath  = '/views/Admin';

const app = new Koa();
app.use(serve(
    path.join(__dirname, staticPath)
));

app.use(nunjuck());
app.use(routerLogin.routes());
app.listen(6060, () => {
    console.log('Server listen port 6060')
});