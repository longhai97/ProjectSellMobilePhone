const Router = require('koa-router');
const LoginController = require('../controller/LoginController');

const router = new Router();
const loginController = new LoginController();

router.get('/login', loginController.getLogin);
router.post('/login', loginController.postLogin);
router.get('/test-hash', async ctx => {
    let hasher = ctx.hasher;
    ctx.body = {
        hashed: await hasher.generate('Fuck thang Vanh')
    }
})
module.exports = router;