module.exports.beforeMiddleware = (req, res, next) => {
    req.session = { nome: 'Jader' }
    console.log()
    console.log('aqui quem fala é o beforeMiddleware, caminho src/middlewares/geralmiddleware.js')
    console.log()
    next()
}

module.exports.afterMiddleware =  (req, res) => {
    console.log()
    console.log('middleware final, fui enviado mesmo depois de ja entregar a pagina pro usuário, caminho src/middlewares/geralmiddleware.js')
    console.log()
    //n precisou de next aqui pq esse foi o ultimo middleware q foi passado então eu ia dar next e n ia ter nada pra dar continuidade no programa

}