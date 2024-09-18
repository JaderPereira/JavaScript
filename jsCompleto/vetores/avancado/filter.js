//filter = retorna uma cópia do array, não modifica o original.
//o método filter, como o nome já diz, vai filtar seu array, você coloca uma função como parâmetro que vai avaliar cada elemento desse array e de acordo com seu objetivo você retorna os valores que você quer, essa função já tem 3 parâmetos bases, o primeiro é o valor que está sendo iterado naquele momento, o segundo é o indice desse array e o tercerio é o array completo, na linha 5 tu ve isso. Use com sabedoria.
const numeros = [1, 2, 3, 4, 10, 54, 6, 32, 76]

const numerosFiltrados = numeros.filter((valor, indice, arrayCompleto) => {
    console.log(valor, indice, arrayCompleto)
    return valor>10
})

console.log(numerosFiltrados)
//filter vai sempre retornar um array, com a mesma quantidade de elementos ou menos

const pessoas = [
    {  nome: 'Luiz',    idade: 62  },
    {  nome: 'Maria',   idade: 23  },
    {  nome: 'Eduardo', idade: 55  },
    {  nome: 'Leticia', idade: 19  },
    {  nome: 'Rosana',  idade: 32  },
    {  nome: 'Wallace', idade: 47  },
]

const filterNames = pessoas.filter((obj) => obj.nome.length > 5 )
const filterAge   = pessoas.filter((obj) => obj.idade > 50 )
const terminaComA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'))
//endsWith('a') ta checando se a ultima letra da string é a mesma do parÂmetro, retorna boolean

console.log(filterNames)
console.log(filterAge)
console.log(terminaComA)