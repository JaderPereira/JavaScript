var x = Math.ceil(4.123)            //arredonda o valor real pra cima
console.log(x)

var y = Math.floor(4.123)           //arredonda o valor real para baixo
console.log(y)

let z = Math.round(4.123)           //se dps da virgula for entre 0 e 4 ele arredonda pra baixo, se for entre 5 e 9, arredonda pra cima
console.log(z)
z = Math.round(4.598)
console.log(z)

let aleatorio = Math.random()      //gera um numero aleatorio
console.log(aleatorio)

console.log(Math.max(1, 35, -98, 342, 9, 1))
console.log(Math.min(1, 35, -98, 342, 9, 1))

let numero1 = 9
console.log(numero1 ** 0.5)     //raiz quadrada é feita elevando 0.5 ao numero que vai ser feita a raiz
