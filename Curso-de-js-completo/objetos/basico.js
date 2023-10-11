/*
let pessoa1 = {
    nome: 'Thales',
    sobrenome: 'Souza',
    idade: 18,

    addIdade () {
        return idade++
    }
}

console.log(pessoa1)
console.log(pessoa1.addIdade())
*/

function criarUsuario (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

let pessoa1 = criarUsuario ('Thales', 'Souza', 18)

console.log(pessoa1)
console.log('Nome do usuário:',pessoa1.nome)
console.log('Sobrenome do usuário:',pessoa1.sobrenome)
console.log('Idade do usuário:',pessoa1.idade)