//funções callback são funções callback assim que outras coisas acabarem
function rand(min = 1000, max = 3000) {
    //expressão pra gerar um numero aleatório entre 1000 e 3000(milisegundos)
    return Math.floor(Math.random() * (max - min) + min)
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1')
        if(callback) callbackF1()
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2')
        if(callback) callbackF2()
    }, rand());
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3')
        if(callback) callbackF3()
    }, rand());
}
f1(callbackF1)

function callbackF1 () {
    f2(callbackF2)
}

function callbackF2 () {
    f3(callbackF3)
}

function callbackF3 () {
    console.log('Hello, world')
}