//Métodos legais pro promise.

function aleatorio (min, max) {
    //função que cria um numero aleatório entre o maximo e o minimo passado no parâmetro
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function funcaoPromise (msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Erro: tipo da mensagem não é uma string')
            return
        }

        setTimeout(() => {
            resolve(msg)
            return
        }, time);
    })
}


//Promise.all
//O promise.all() vai resolver todas as promises que foram passadas no parâmetro com um then, no exemplo abaixo temos um vetor e 3 desses valores são chamadas de uma função promise, para ser melhor performático podemos usar o promise.all para resolver o problema desses 3 valores já que tem o mesmo objetivos(só adicionarem o valor do primeiro parâmetro ao inves dessa função mas poderia ser uma parada super complexa). Claro, caso você tenha resoluções diferentes pra diferentes valores que jogar na sua promise, crie seus 'then' de maneira funcional.
const promise = [
    'Primeiro valor',
    funcaoPromise('promise 1', 3000),
    funcaoPromise('promise 2', 500),
    funcaoPromise('promise 3', 1000),
    //funcaoPromise(1000, 1000),    //linha pra o catch
    'outro valor'
]

Promise.all(promise)
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    })




//Promise.race
//race() vai devolver pra gente o primeiro valor a ser resolvido que for jogado em uma promise. No código abaixo temos 4 promises que estão sendo resolvidas em tempos aleatórios, o race vai mostrar a primeria a ser resolvida.
const race = [
    funcaoPromise('Corrida1', aleatorio(1, 5)),
    funcaoPromise('corrida2', aleatorio(1, 5)),
    funcaoPromise('corrida3', aleatorio(1, 5)),
    funcaoPromise('corrida4', aleatorio(1, 5))
]

Promise.race(race)
    .then(valor => {
        console.log(valor)
    })

//Promise.resolve

//Promise.reject