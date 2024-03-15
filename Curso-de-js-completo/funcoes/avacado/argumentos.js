//Nas funções, temos um recurso chamado argumentos
function faltaParametro (a, b) {
    return a + b
}
console.log(faltaParametro(1))
//Na função a cima podemos ver que ela recebe 2 parametros e soma eles, mas, na sua chamada ela só dá o valor de "a" e "b" fica como undefined. quando rodamos o código recebemos = NaN(Not a Number)

function valorPredefinido (a, b = 1) {
    return a + b
}
console.log(valorPredefinido(4))
//No parâmetro dessa função temos 2 variaveis, "a" e a variável "b" que tem um valor predefinido, ou seja, se nenhum valor for passado para "b" ele vai assumir o valor que já foi mandado para ele. Quando rodamos o código recebemos = 5

function tresValoresPredefinidos (a, b = 1, c = 5) {
    return a + b + c
}
console.log(tresValoresPredefinidos(4, undefined, 10))
//Quando temos uma situação parecida com essa que queremos colocar o valor no primeiro e no segundo parâmetro e deixar o segundo sem, nós colocamos 'undefined' para que nenhum valor seja inserido diretamente para que seja o valor padrão(1). Quando rodamos o código recebemos = 15

function arrayArgumentos () {
    console.log(arguments)

    for (let aux in arguments) {
        console.log(arguments[aux])
    }
}
arrayArgumentos(10, 11, 12, 13, 14)
/*Quando passamos valores e não temos variáveis para armazenar esse valores eles são enviados para um vetor chamado "arguments", esse vetor pega todos os valores que estão jogados sem variáveis e armazena em um vetor, o primeiro valor vai pro índice 0, o segundo vai pro índice 2 e por ai vai. Quando rodamos o código recebemos = [Arguments] { '0': 10, '1': 11, '2': 12, '3': 13, '4': 14 }
10
11
12
13
14
*/
console.log()

//Atribuição via desestruturação com array
function avdArray ([valor1, valor2, valor3]) {
    return [valor1, valor2, valor3]
}
console.log(avdArray([3, 4, 5]))

function avdObjeto ({nome, sobrenome, idade}) {
    return {nome, sobrenome, idade}
}
console.log(avdObjeto({nome: 'Jader', sobrenome: 'Pereira', idade: '16'}))

//rest operator(...)
function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        acumulador += numero
    }
    console.log(acumulador)
}
conta('+', 0, 10, 12, 30, 15, 65)