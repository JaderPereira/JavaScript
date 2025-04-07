const express = require('express')   //pegando o express q eu baixei
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Rotas da raiz do site
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPOST)

// rotas de contato
route.get('/contato', contatoController.contato)

module.exports = route
