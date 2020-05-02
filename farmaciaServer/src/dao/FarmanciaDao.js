const dao = require('./Dao');

class FarmanciaDao {
    constructor() { }

    async _create(farmarcia) {
        return dao('Farmancia').insert(farmarcia);
    }

    async _findAll() {
        return  dao('Farmancia').select('*');
    }
}

module.exports = new FarmanciaDao()