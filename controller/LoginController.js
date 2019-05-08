const KnexFile = require('../knexfile');
const knex = require('knex')(KnexFile.development);

class LoginController {
    async getLogin(ctx, next) {
        ctx.render('login.html', true);
    }

    async postLogin(ctx, next) {
        const {username, password} = ctx.request.body;
        
        let user = await ctx.authenticator.attempt(username, password);

        ctx.body = {
            user: user
        }
    }
}

module.exports = LoginController;