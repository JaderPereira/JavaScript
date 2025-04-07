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
    //Mensagens flash são usadas em uma sessão, coisa bem rapida, quando você recarrega a pagina elas já somem, testa ai comentando e descomentando as linhas abaixo
    /*
    req.flash('info', 'Olá mundo')
    req.flash('info', 'sou uma mensagem')
    req.flash('error', 'Erro')
    req.flash('success', 'Sucesso')
    */
    console.log(req.flash('info'), req.flash('error'), req.flash('success'))

    //essa parada de session se refere a sessão do usuário, mt util para pegar informações ali na hora dele como um nome de um usuário q ele colocou e colocar em outras partes do programa, o objeto session ajuda a gente nisso, eu coloquei o nome de maneira bruta e peguei ele por aqui usando o req.session.usuario. o código ta comentado, se quiser ver funcionanando só descomenta ai
    // req.session.usuario = { nome: 'Jader', logado: true }
    console.log(req.session.usuario)
    res.render('index')
    return
}

exports.trataPOST = (req, res) => {
    res.send(req.body)
}


