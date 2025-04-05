/* Código que envia um dado para a coleção do cluster, vou comentar para nao ficar mandando dados toda vez que eu iniciar o servidor

const HomeModel = require('../models/home')
HomeModel.create({
    titulo: 'Outro titulo de teste',
    descricao: 'Outra descrição de teste'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))
*/

exports.paginaInicial = (req, res, next) => {
    res.render('index', {saudacao: '<span style="color: #ff0000;">Olá</span>, seja bem-vindo(a)!'})
    return
}

exports.trataPOST = (req, res) => {
    res.send(req.body)
}


