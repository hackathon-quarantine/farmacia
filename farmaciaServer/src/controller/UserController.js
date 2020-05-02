const UserDao = require('../dao/UserDao');

class UserController {
    
    constructor() { }

    async create(request, response) {

       const { email, firstName, lastName, location, password  } = request.body;

       const { logitude, latitude } = location;

        const [userId] = await UserDao._create({
          email , firstName, lastName, logitude, latitude, password
        })

       response.json({
        Id: userId,
        email, 
        firstName, 
        lastName, 
        location
       })

    }

    async find(request, response) {
      return response.json(await UserDao._findAll())
    }

}

module.exports = new UserController()