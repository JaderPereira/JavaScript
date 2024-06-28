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