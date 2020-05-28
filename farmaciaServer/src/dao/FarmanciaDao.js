const dao = require('./Dao');

class FarmanciaDao {
    constructor() { }

    async _create(farmarcia) {
        return dao('Farmancia').insert(farmarcia);
    }

    async _findAll() {
        return  dao('Farmancia').select('*');
    }


  async _findAllByMedicamento(nome) {

    const query = dao('farmacia_medicamento as fm')
      .join('farmacia as f', 'f.id', 'fm.farmaciaId')
      .join('medicamento as m', 'm.id', 'fm.medicamentoId')
      .where('m.nome', nome)
      .select(['f.nome as farmaciaNome','f.id as farmaId','f.*', 'm.*'])

    return query;
  }
}

module.exports = new FarmanciaDao()
