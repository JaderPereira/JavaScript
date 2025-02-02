const HomeModel = require('../models/home')

HomeModel.create({
    titulo: 'Outro titulo de teste',
    descricao: 'Outra descrição de teste'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))


exports.paginaInicial = (req, res, next) => {
    //essa parada de session se refere a sessão do usuário, mt util para pegar informações ali na hora dele como um nome de um usuário q ele colocou e colocar em outras partes do programa, o objeto session ajuda a gente nisso, eu coloquei o nome de maneira bruta la no routes mas peguei ele por aqui usando o req.session.
    console.log('Olha o que tem dentro do req.session.nome:', req.session.nome)
    console.log('eu to entre o beforeMiddleware e antes do afterMiddleware')
    res.render('index')
    next() //da pra usar o next aqui tbm
}

exports.trataPOST = (req, res) => {
    res.send(req.body)
}


