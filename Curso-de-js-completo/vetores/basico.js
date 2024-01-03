//introdução
const alunos = ['luiz', 'maria', 'joao']        //lista com 3 alunos, luiz sendo o 0, maria 1 e joao o 3
console.log(alunos)                             //exime o array inteiro
console.log(alunos[0])                          //o indice do array começa no zero
console.log(alunos[0], alunos[1])               //exibindo 2 itens do array
alunos[3] = 'vitor'                             //tambem podemos adicionar itens ao array pelo indice que está depois do ultimo elemento.
console.log(alunos)                             //agora temos quatro elementos, luiz = 0, maria = 1, joao = 2 e vitor = 3

//adicionando elementos ao array de maniera inteligente

console.log(alunos.length)                      //mostra a quantidade de elementos que tem dentro do array
//podemos ver que ele nos retorna 4 elementos, devemos levar em cosideração que nosso indice começa em zero então 4 ainda não existe porque o array alunos so vai ate o 3

alunos[alunos.length] = 'jader'
alunos[alunos.length] = 'minguel'

//como a largura do array nos retorna um valor maior que ela, podemos usar isso para adicionar mais elementos sem depender de saber o número exato de itens do array.
console.log(alunos)
//tambem podemos adicionar pelo metodo push
alunos.push('davi')
alunos.push('gal')
alunos.push('paula')
console.log(alunos)

//colocando elementos no indice zero

alunos.unshift('lopin')             //colocou o 'lopin' no indice zero e jogou todos os outro elementos pra um indice maior que eles em 1
console.log(alunos)

//retirando elementos como o pop e shift

alunos.pop()                       //remove o ultimo item do array que no caso é 'paula'
console.log(alunos)                //paula foi removida pois era o elemento de ultimo indice no array
let removido = alunos.pop()        //mais um elemento vai ser removido do array, so que neste caso ele vai ser armazenado em uma variável
console.log(removido)              //como gal era o ultimo elemento dps que paula foi removida, ela ficou armazenada dentro da variável
console.log(alunos)

removido = alunos.shift()          //com o metodo shift nós tiramos o primeiro elemento do array, aquele que está no indice 0
console.log(removido)              //lopin estava no indice zero então foi obliterado do array e armazenado na variavel removido
console.log(alunos)                //aqui podemos ver o array com menos elementos depois das nossas alterações

//removendo elementos sem alterar os indices com o delete

delete alunos[3]                   //com o delete eu estou deletando o elemento do indice 3 que é o 'vitor'
console.log(alunos)                //podemos ver que no lugar do elemento que foi deletado tem uma msgm avisando que o indice esta vazio
console.log(alunos[3])             //se escrevermos apenas o indice 3 ele nos retorna um valor indefinido

//cortando arrays com slice

let funcionarios = ['jader', 'davi', 'miguel', 'paula', 'gal']      //array com 5 elementos      
console.log(funcionarios.slice(3, 5))                               //corte do indice 0, 1 e 2, deixando apenas o indice 3 e 4(mesma coisa que as strings)
console.log(funcionarios.slice(0, -1))                              //cortando o ultimo elemento