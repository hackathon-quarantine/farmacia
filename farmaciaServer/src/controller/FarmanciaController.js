const FarmanciaDao = require('../dao/FarmanciaDao');

class FarmarciaController {
    
    constructor() { }

    async create(request, response) {

      
       const farmancia = request.body;
         const [farmanciaId] = await FarmanciaDao._create(farmancia)

       response.json(farmancia)

    }

    async find(request, response) {
      return response.json(await FarmanciaDao._findAll())
    }

    
  async findbyMedicamento(request, response) {
    const { nome } = request.body;
    return response.json(await FarmanciaDao._findAllByMedicamento(nome))
  }

}

module.exports = new FarmarciaController()