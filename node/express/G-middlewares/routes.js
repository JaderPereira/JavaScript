const express = require('express')   //pegando o express q eu baixei
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
const afterMiddleware = require('./src/middlewares/geralMiddleware').afterMiddleware
const beforeMiddleware = require('./src/middlewares/geralMiddleware').beforeMiddleware
//vai no caminho dessas 2 variaveis de cima, la dentro tem os middlewares, profissionalmente se faz desse jeito pra ficar bem organizado. 



// Rotas da raiz do site
route.get('/', beforeMiddleware, homeController.paginaInicial, afterMiddleware)
route.post('/', homeController.trataPOST)

// rotas de contato
route.get('/contato', contatoController.contato)

module.exports = route
