//reduce vai reduzir teu array, o map vai retornar um array do mesmo tamanho, o filter vai reduzir ou um array de tamanho igual ou menor. O reduce vai nos ajudar a reduzir nosso array, ele tambem pode fazer a função do filter e do map, mas é melhor optar por usar o próprio filter e map.

//o reduce tem os parâmetros diferentes do filter e map, o primeiro é o acumulador, segundo o valor, terceiro o indice e quarto o array completo,                    fica assim:  array.reduce(acumulador, valor, indice, arrayCompleto)

const numeros = [1, 2, 3, 4, 10, 54, 6, 32, 76]
const total = numeros.reduce((acumulador, valor) => {
    return acumulador + valor
//o acumulador fica dps da função.
}, 0)

const par = numeros.reduce((acumulador, valor) => {
    if (valor % 2 == 0) acumulador.push(valor)
    return acumulador
}, [])

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2)
    return acumulador
}, [])

console.log(total)
console.log(par)
console.log(dobro)

const pessoas = [
    {  nome: 'Luiz',    idade: 62  },
    {  nome: 'Maria',   idade: 23  },
    {  nome: 'Eduardo', idade: 55  },
    {  nome: 'Leticia', idade: 19  },
    {  nome: 'Rosana',  idade: 64  },
    {  nome: 'Wallace', idade: 47  },
]

const older = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(older)