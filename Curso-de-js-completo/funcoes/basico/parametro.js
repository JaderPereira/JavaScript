function soma (a,b) {
    return a + b
}

console.log(soma())             //variável a e b ficaram valendo indefinido, indefinido + indefinido = Not a Number(NaN)
console.log(soma(4,5))          //execução normal
console.log(soma(5, 5, 1, 3))   //4 valores para 2 variáveis, a variável a vale 5, a variável b vale 5 e os outros dois valores não descartados porque não tem variavel
console.log(soma(6))            //valor em algumas variáveis resulta em a = 6, b = undefined              6 + undefined = Not a Number(NaN)
