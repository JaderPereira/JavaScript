//map vai retornar uma cópia do array com exatamente o mesmo tamanho, tem umas paradinhas que a gente aprendeu no filter q funciona aqui, esse negocio dela ter uma função de callback e os parâmetros serem o valor, o indice e o array completo.

const numeros = [1, 2, 3, 4, 10, 54, 6, 32, 76]
const dobroNumeros = numeros.map(  (valor) => valor*2  )

console.log(dobroNumeros)

const pessoas = [
    {  nome: 'Luiz',    idade: 62  },
    {  nome: 'Maria',   idade: 23  },
    {  nome: 'Eduardo', idade: 55  },
    {  nome: 'Leticia', idade: 19  },
    {  nome: 'Rosana',  idade: 32  },
    {  nome: 'Wallace', idade: 47  },
]

const nome = pessoas.map((valor) => valor.nome  )
const idade = pessoas.map((valor) => {
    /*dava pra fazer assim tambem
        delete valor.nome
        return valor
    */
    return { idade: valor.idade }
})
const comIds = pessoas.map((valor, indice) => {
    //Eu tenho que criar essa variável porque quando eu estou mudando o obj eu nao to criando uma cópia dele e sim fazendo uma referencia do seu valor, por isso eu tenho q usar o spread operator para espalhar o objeto, não precisa fazer isso com o array pq o método .map() já faz isso automaticamente mas para elementos mais profundos que nem aconteceu nesse código utilize o spread operator
    const novoObj = {...valor}
    novoObj.id = indice
    return novoObj
})

console.log(nome)
console.log(idade)
console.log(comIds)
console.log(pessoas)

//Tratando tipos primitvos em array
//Dá pra trocar os tipos primitivos do array, o array aqui embaixo tem todos os seus elementos como string, pra transformar todos eles em numero não podemos fazer Number(array), para fazer essa transformação podemos utilizar o map

let array = ['0', '1', '2', '3', '4', '5']
console.log(array)

array = array.map(Number)  //transforma todos os elementos do array em numeros
console.log(array)

array = array.map(String)  //transforma todos os elementos do array em Strings
console.log(array)

array = array.map(Number)
array = array.map(Boolean)  //vai transformar todos os numeros em verdadeiro ou falso, 0 = false   1 ou maior = true
console.log(array)

//quando mapeamos o array para trocar seus elementos por valores booleanos temos um empasse, o que é verdadeiro ou falso? Simples, como dito acima, 0 será sempre falso e todo numero maior que 0 vai ser verdadeiro. Quando o assunto é string toda string que conter algum valor vai ser verdadeiro, só será falso se ela for uma string vazia sem espaço ('').