const Auth = require('./Authentication');

module.exports = () => {

    return async (ctx, next) => {
        let auth = new Auth(ctx.userRepository, ctx.hasher);
        ctx.authenticator = auth;
        await next();
    }
}