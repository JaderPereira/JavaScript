//Nas funções, temos um recurso chamado argumentos
function faltaParametro (a, b) {
    return a + b
}
console.log(faltaParametro(1))
//Na função a cima podemos ver que ela recebe 2 parametros e soma eles, mas, na sua chamada ela só dá o valor de "a" e "b" fica como undefined. quando rodamos o código recebemos = NaN(Not a Number) 