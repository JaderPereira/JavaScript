let numero1 = 1500  //number
let numero2 = 2.25358769754  //number

//console.log(numero1.toString() + numero2)
//numero1 = numero1.toString()
console.log(typeof numero1)

console.log(numero1.toString(2))                    //representação binária
console.log(numero2.toFixed(3))                     //arredonda o número
console.log(Number.isInteger(numero1))
console.log(Number.isInteger(numero2))

let conta = numero1 * 'oi'
console.log(conta)
console.log(Number.isNaN(conta))
var conta1 = 21 - 56 - 2
console.log(conta1)