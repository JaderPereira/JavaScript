//Dá pra acessar valores dentro de um objeto com a notação de ponto e com a notação de colchete
const pessoa = {
    nome: 'Jader',
    sobrenome: 'Pereira'
}

//notação de ponto(.)
console.log(pessoa.nome)
//notação de colchetes
console.log(pessoa['nome'])
console.log(pessoa.sobrenome)
console.log(pessoa['sobrenome'])

//Dá pra declarar objetos com o new tambem.
const pessoa1 = new Object()
pessoa1.nome = 'Jader'
pessoa1.sobrenome = 'Pereira'

const pessoa2 = {
    nome: 'Jader',
    sobrenome: 'Pereira'
}

console.log(pessoa1, pessoa2)

//dá pra remover valores com o delete
delete pessoa2.sobrenome
console.log(pessoa2)