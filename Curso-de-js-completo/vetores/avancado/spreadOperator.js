//Exemplo simples de que o array é um tipo de dado referenciado.
const marcasAntigas = ['Toyota', 'Audi', 'Honda']
const marcasNovas = marcasAntigas
//as marcas novas são apenas toyota e audi, então nas marcas novas eu tenho que tirar a honda, por isso usei o metodo pop abaixo
marcasNovas.pop()
console.log(marcasAntigas, marcasNovas)
//na linha 9 eu não estou criando um array novo e sim apontando para ele. Para resolver esse possível problema siga as linhas abaixo

//spread operator(parecido com o rest operator)
const colecaoAntiga = ['Gucci', 'Rusty', 'Adidas']
const colecaoNova = [...colecaoAntiga]

colecaoNova.pop()
console.log(colecaoAntiga, colecaoNova)
//eu mudei os valores do array colecaoNova mas não mudei os do array colecaoAntiga, isso porque o spread operator ele cria essa cópia do array que você quer.

//dá pra usar o spread operator com objetos tbm
const pessoa1 = { nome: 'Jader', idade: 17 }
const pessoa2 = { ...pessoa1 }

pessoa2.nome = 'Miguel'
pessoa2.idade = 16
console.log(pessoa1, pessoa2)