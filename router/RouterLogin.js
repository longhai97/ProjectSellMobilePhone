const Router = require('koa-router');
const LoginController = require('../controller/LoginController');

const router = new Router();
const loginController = new LoginController();

router.get('/login', loginController.getLogin);
router.post('/login', loginController.postLogin);

const logginRequiredMiddleware = async (ctx, next) => {
    if (ctx.authenticator.check()) {
        await next();
    } else {
        ctx.redirect('/login')
    }
}

router.get('/dashboard', logginRequiredMiddleware, async (ctx) => {
    ctx.body = {
        hello: await ctx.authenticator.user()
    }
});


router.get('/logout', loginController.logout)
module.exports = router;