const KnexFile = require('../knexfile');
const knex = require('knex')(KnexFile.development);

class AdminController {
    async getAdmin(ctx, next) {
       let data = await knex.select('*').from('Admin');
       ctx.render('index.html', { data });
    }
}

module.exports = AdminController;