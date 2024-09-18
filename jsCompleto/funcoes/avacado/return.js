//return
//retorna um valor e termina a função

function comeco (comeco) {
    function resto (resto) {
        return comeco + ' ' + resto
    }
    //o retorno da função 'comeco' vai ser a função 'resto', a constante 'fala' abaixo recebe a função 'comeco' que está retornando a função 'resto', então a constante 'fala' assume a função resto. Quando rodamos o código e vemos o que o console.log escreveu foi 'Olá, mundo!' pelo fuzue todo que fizemos combinando funções.
    return resto
}

const fala = comeco('Olá,')
console.log(fala('mundo!'))

/*digamos que eu queira fazer um programa com varias funções que duplica, triplica, quadriplica e por ai vai, um número. Jeito errado:

function duplica (n) {
    return n * 2
}

function triplica (n) {
    return n * 3
}

function quadriplica (n) {
    return n * 4
}

jeito certo:
*/
function multiplica (multiplicador) {
    return function (n) {
        return n * multiplicador
    }
}
const duplica = multiplica(2)
const triplica = multiplica(3)
const quadriplica = multiplica(4)
console.log(duplica(3))
console.log(triplica(3))
console.log(quadriplica(3))
