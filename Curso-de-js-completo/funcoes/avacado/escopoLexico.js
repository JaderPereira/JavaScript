//Escopo léxico
const nome = 'Jader'

function falaNome () {
    //const nome = 'Kayke'
    console.log(nome)
}
function chamaFalaNome () {
    const nome = 'Pedro'
    falaNome()
}
chamaFalaNome()