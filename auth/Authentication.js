const user = require('../user/User');

class Authenticator {
    constructor(userProvider, hasher) {
        this.userProvider = userProvider;
        this.hasher        = hasher;
    }

    async attempt(username, password) {
        let attemptingUser = await this.userProvider.findByUsername(username);
        console.log(attemptingUser);

        if (!attemptingUser) {
            throw new Error('Wrong User Name');
        }

        if (!await this.hasher.check(password, attemptingUser.getPassword())) {
            throw new Error('wrong Password');
        }

        return attemptingUser;
    }
}

module.exports = Authenticator;