//Escopo léxico
const nome = 'Jader'

function falaNome () {
    const nome = 'Kayke'
    console.log(nome)
}
function chamaFalaNome () {
    const nome = 'Pedro'
    falaNome()
}
chamaFalaNome()

//Closure
function retornaFuncao (nome) {
    return function () {
        return nome
    }
}
const funcao1 = retornaFuncao('Jader')
console.log(funcao1())