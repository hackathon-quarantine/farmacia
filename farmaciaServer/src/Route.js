const express = require('express');
const routes = express.Router();
const homeController = require('./controller/HomeController')
const userController = require('./controller/UserController')
const farmanciaController = require('./controller/FarmanciaController')

routes.get('/',homeController.index);

routes.post('/user', userController.create)

routes.get('/user', userController.find)

routes.get('/farmancia', farmanciaController.find)

routes.get('/farmanciaMedicamento', farmanciaController.findbyMedicamento)

routes.post('/farmancia', farmanciaController.create)

module.exports = routes;
