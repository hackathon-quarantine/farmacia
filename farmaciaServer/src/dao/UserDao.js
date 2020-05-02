const dao = require('./Dao');

class UserDao {
    constructor() { }

    async _create(User) {
        return dao('user').insert(User);
    }

    async _findAll() {
        return  dao('user').select('*');
    }
}

module.exports = new UserDao()