//Já vimos como concatenar strings utilizando o sinal de +, mas para concatenar arrays fazemos de forma diferente, utilizamos um método.

const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]
const numeros3 = numeros1.concat(numeros2)

console.log(numeros3)

//Podemos usar o método .concat() para adicionar vários elementos tambem

const numeros4 = numeros3.concat([7, 8, 9], 'String', 10)

console.log(numeros4)

//dá pra concatenar com o spread operator tbm

const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
const nums3 = [...nums1, ...nums2]

console.log(nums3)
//mesma coisa que o método concat, ai tu usa o que tu achar melhor