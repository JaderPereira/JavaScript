//introdução a parte avançada de funções relembrando algumas formas de delcarar elas:
function funcaoNormal () {
    console.log('sou uma função comum\n')
}
const funcaoAnonima = function () {
    console.log('sou uma função anônima, como pode ver não tenho nome e sou chamado pelo nome da minha variável.\n')
}
const funcaoflecha = () => {
    console.log('sou parecido com uma função anônima, mas ao inves da palavra \"function\" eu possuo uma flecha(=>) em seu lugar, também tenho umas alterações com o uso do \"this\".\n')
}
const objeto = {
    funcao() {
        console.log('sou uma função dentro de um objeto, não preciso nem usar a palavra reservada \"function\".\n')
    }
}
function executaFuncao (funcao) {
    console.log('essa é uma função que pode executar outras funções, vou executar a função normal logo abaixo:')
    funcao()
}
funcaoNormal()
funcaoAnonima()
funcaoflecha()
objeto.funcao()
executaFuncao(funcaoNormal)