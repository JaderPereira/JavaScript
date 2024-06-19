//split
const nome = 'Jader Pereira Santos Gomes'
const nomes = nome.split(' ')

console.log(nomes)
//O método split() faz com que uma string se torne um array, ela separa seus elementos de acordo com seu parâmetro, neste exemplo o paraâmetro é ' ' ou seja, um espaço. Cada elemento da string foi separado pelos espaços como podemos ver no console.log() acima

//join
const nomes2 = ['Jader', 'Pereira', 'Santos', 'Gomes']
const nome2 = nomes2.join(' ')

console.log(nome2)
//O join é a mesma coisa que o split só que ao contrário, você vai pegar um array e utilizar o método join() para transformar esse array em uma unica string como podemos ver no console.log() acima


//Parada legal do split
const frutas = 'Banana, maçã, mixirica'
const paradaLegal = frutas.split('')
console.log(paradaLegal)
//como dá pra ver no console.log() acima, TODA a string foi separada caracter por caracter, as vezes pode ser util.