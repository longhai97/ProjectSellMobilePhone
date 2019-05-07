const KnexFile = require('../knexfile');
const knex = require('knex')(KnexFile.development);

class LoginController {
    async getLogin(ctx, next) {
        ctx.render('login.html');
    }
}

module.exports = LoginController;