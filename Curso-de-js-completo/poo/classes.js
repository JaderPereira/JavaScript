//Aprendendo a criar classes
// é a mesma coisa que uma constructor function, tanto que se você cria uma constructor function o proprio javaScript indica uma outra formatação que segue essa linha de classes, na classe abaixo eu criei uma constructor function e o JS me sugeriu mudar pra classe e eu so aceitei e ficou formatado direitnho 

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }


    //Aqui estou declarando meus métodos dentro da classe, isso não é uma boa prática nas constructor function pois vai ser criado cada metodo pra cada objeto, é mais performatico colocar todos os métodos dentro do prototype, quando utilizamos classes não precisamos nos preocupar com isso, esses métodos já vão ser diretamente enviados prototype. 
    falar() {
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Jader', 'Pereira')
console.log(p1)
p1.falar()
p1.comer()
p1.beber()