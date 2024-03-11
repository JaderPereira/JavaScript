function receberArtigo (id, callbackSucesso, callbackErro) {
    if (false) {
        callbackSucesso('função callback','callback mt bacana')
    } else {
        callbackErro('erro:')
    }
}

let callbackSucesso = function (titulo, discricao) {
    console.log(titulo + ', deu certo!')
    console.log(discricao + 'mt facil')
}
let callbackErro = function (erro) {
    console.log(erro , 'é um erro mas foi um acerto')
}

receberArtigo(1, callbackSucesso, callbackErro)

//funções callback são bastante utilizadas em JS, este exemplo é mais para entender como elas funcionam.