//Nesta aula sobre prototypes, abra seu navegador para checar o console pq vamos ver umas parada lá dog.
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.nomeCompleto = () => {
        return this.nome + ' ' + this.sobrenome
    }
}


const pessoa1 = new Pessoa('Jader', 'Pereira')
const pessoa2 = new Pessoa('Paula', 'Rangel')

//abrindo o console, podemos ver o que tem dentro dos objetos,  seus respectivos nomes jader e paula, e seus respectivos sobrenomes pereira e rangel. Podemos notar que a função 'nomeCompleto' foi criada em ambos os objetos, podemos considerar isso uma má pratica pois pode prejudicar a performace do programa, o mais ideal seria criar uma unica função que fosse utilizada pelos 2 objetos e não uma função pra cada objeto. Nos 2 console.log abaixo temos 2 objetos chamando a mesma função, só que são duas funções diferentes e não 1 unica(como deveria ser).

console.log(pessoa1.nomeCompleto())
console.log(pessoa2.nomeCompleto())

//Para resolver esse problema de performace podemos utilizar o prototype para hospedar essa função 'nomeCompleto' que será 1 unica função para ser usada nos 2 objetos.

//O que é prototype? Do ingles, 'prototipo' vai servir como um espaço da função construtora que não será construido toda vez que for construir algo, no código acima vemos que a função nomeCompleto está sendo criada 2 vezes em 2 objetos diferentes sendo que fazem a mesma função e consomem mais recurso que o desejado, para sabermos como está o prototype da nossa função construtora podemos usar o:

console.log(Pessoa.prototype) //mostra o prototype de pessoa

//eu vou criar uma outra função construtora para não ocorrer conflito com a primeira função, elas vão ter a mesma finalidade mas nomes diferentes, so isso. Para definirmos a função nomeCompleto dentro do prototype fazemos assim:

function Funcionario(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Funcionario.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome 
}

const funcionario1 = new Funcionario('Jader',  'Pereira')
const funcionario2 = new Funcionario('Paula',  'Rangel')

//aqui temos 2 console.log que estão com a mesma finalidade utilizando a mesma função. Repare na função construtora não tem nenhuma função 'nomeCompleto', mas, abaixo vemos que temos uma função 'nomeCompleto' sendo declarada no prototype, onde os 2 objetos poderão usar essa função sem consumir o dobro de recursos.
console.log(funcionario1.nomeCompleto())
console.log(funcionario2.nomeCompleto())
//dentro do prototype de funcionario a gente tem a função 'nomeCompleto'
console.log(Funcionario.prototype)
