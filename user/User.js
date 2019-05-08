class User {
    constructor(id, username, password) {
        this.username = username;
        this.password = password;
        this.id = id;
    }

    getPassword() {
        return this.password;
    }

}

module.exports = User;
