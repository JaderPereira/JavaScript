const pessoa = {
    nome: 'Jader',
    sobrenome: 'Pereira',
    idade: 16,
    endereco: {
        rua: 'Bento Carneiro da Silva',
        numero: '193'
    }
}
//atribuição via desestruturação

//a linha de baixo está mandando o programa percorrer o array e tentar encontrar alguma propriedade que bata com os nomes que estão escritos dentro da chave.
const { nome = "não informado", sobrenome = "não informado" } = pessoa
//caso o nome esteja indefinido dentro do objeto, podemos adicionar um valor padrão como está sendo feito com o "não informado".
console.log(nome, sobrenome)

//atribuição via desestruturação dentro de um objeto:
const { endereco, endereco: {rua, numero} } = pessoa
console.log(endereco) //o objeto inteiro
console.log(rua, numero) //uma propriedade de cada vez

//tambem podemos utilizarar o operador 'rest' dessa forma:
//const {nome, ...resto} = pessoa
//console.log(resto)          vão aparecer todas as propriedades menos o nome.