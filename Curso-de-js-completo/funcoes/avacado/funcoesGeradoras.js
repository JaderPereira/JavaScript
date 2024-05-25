//Uma função geradora é uma função que pode ser 'pausada', voce faz uma função e ela pode ter várias paradas para serem feitas congelando parte do código que pode ser rodado posteriormente em um código complexo que requer esse tipo de funcionalidade
//nas funções geradores a gente usa a palavra reservada 'yield' para sinalizar aonde o código deve pausar, caso a gente use 'return', como de custume, a função será finalizada e tudo que tiver depois do return não será utilizado.

function* geradora1 () {
    //Código qualquer...
    yield 1
    //Código qualquer...
    yield 2
    //Código qualquer...
    yield 3
}
const g1 = geradora1()
//da pra usar o método '.next()' pra ver qual vai ser o próximo valor do proximo yield
console.log(g1.next())
for(let valores of g1) {
    console.log(valores)
}

console.log()


function* geradora2 () {
    //esse função aqui é um contador infinito que vai adicionando +1 toda vez que o next dela for chamado e como o 'while' é um loop infinito essa função pode ser chamada infinitas vezes.
    let i = 0

    while(true) {
        yield i
        i++
    }
}

const g2 = geradora2()
for(let aux = 0; aux <= 7; aux++) {
    console.log(g2.next())

}

console.log()

    
function* geradora3 () {
    yield 0
    yield 1
    yield 2
}
function* geradora4 () {
    //o yield com asterisco serve pra colocar outra função geradora
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}
const g4 = geradora4()
for(let aux = 0; aux <= 6; aux++) {
    console.log(g4.next())
}

console.log()

function* geradora5 () {
    yield function () {
        console.log('vim do primeiro yield')
    }
    
    yield function () {
        console.log('vim do segundo yield')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()