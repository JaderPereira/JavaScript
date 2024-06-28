//forEach é uma maneira diferente de iterar sobre um array, como for, for in, for of e outras estruturas de repetição, o for each é diferente pq ele funciona como o filter, map e reduce, como um método e uma função em seu parâmetro.

const numeros = [10, 43, 45]
numeros.forEach((valor, indice, array) => {
    //aqui a gente tbm tem aquela parada de ter 3 parâmetros bases que são o valor, indice e o array completo.
    console.log(valor, indice, array)
    return numeros.push(2)
})

//O forEach ali em cima vai iterar sobre o array numeros 3 vezes pq ele tem 3 elementos, como no código ta falando que a cada iteração o array numeros vai receber o valor 2 o resultado do console.log() abaixo vai ser o array original numeros mais os push's que foram feitos.
console.log(numeros)    //[ 10, 43, 45, 2, 2, 2 ]