//Funções recursivas são funções que se chamam, o código de exemplo abaixo é parecido com uma estrutura de repetição, tome cuidado pra sua função não cair em um loop infinito, o nome para você depois de determinadas vezes que a função ta se repetindo caso você esteja preso.
function recursiva (max) {
    console.log(max)
    if(max >= 10) return
    max++
    recursiva(max)
}
recursiva(0)