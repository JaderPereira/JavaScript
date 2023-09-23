/*Desafio de trocar valores de váriaveis com uma variável auxiliar. */

let a = 10
let b = 20
let c = null        //variável axiliar

console.log("A: ",a)
console.log("B: ",b)

c = b           //inicio da troca de valores
b = a
a = c           //fim da troca de valores
c = null

console.log("A: ",a)
console.log("B: ",b)