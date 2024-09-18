//valores primitivos = Number, String, Undefined, Null, Boolean(Bigint e )
//valores refenciais = vetores, objetos e função

let letra1 = 'A'
let letra2 = letra1
console.log(letra1, letra2)

letra1 = 'outra coisa'
console.log(letra1, letra2)



let vetor1 = [1, 2, 3]
let vetor2 = vetor1
console.log(vetor1, vetor2)

vetor1.push(4)
console.log(vetor1, vetor2)