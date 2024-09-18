//Podemos congelar objetos, no momento que o código for ler o método .freeze(), o objeto dentro do parâmetro vai ser congelado, não podendo ser alterado em mais nada
function Pessoa (nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Jader', 'Pereira')
//O freeze vai congelar seu objeto, você não vai poder adicionar, deletar ou mudar nada dentro dele depois do freeze.
Object.freeze(p1)
p1.nome = 'tentando mudar o valor do objeto depois do freeze, só que não vai mudar porque ele ta congelado pelo freeze'
delete p1.sobrenome
p1.idade = 17
const p2 = new Pessoa('Eva', 'Pereira')
console.log(p1, p2)

//congelando elementos dentro de um objeto e não o objeto inteiro
//Esse código abaixo vai explicar como funciona o método que vai confugurar um unico atributo, o objet.defineProperty(), seus parâmetros são nessa ordem, O objeto em que a propriedade se encontra(da pra usar o this), o nome da propriedade e uma chave onde você vai entregar as configurações daquela propriedade  
//objet.defineProperty(objeto, nomePropriedade, {configuracoesDaPropriedade})
function Produto(nome, preco, estoque) {
    this.nome = nome
    this. preco = preco
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //enumerable vai dizer se aquele objeto pode ser visto, se tu rodar o código vai ver que 'estoque aparaece, tenta botar false aqui e rodar dnv
        value: estoque, //value vai ser o valor que o atributo vai ter
        writable: false, //writable vai dizer se o atributo pode receber outro valor com o '=', tenta mudar o valor de estoque pra ver se tu consegue
        configurable: false  //configurable vai dizer se eu posso configurar aquele atributo, deletar, modificar, fazer contas com ele e etc
    })
}
const produto1 = new Produto('Camisa', 40, 5)
console.log(produto1)
//object.keys() vai retornar um array com todos os atributos que tem dentro do objeto em questão.
console.log(Object.keys(produto1))

//Objet.defineProperties()
//ele é bem parecido com o de cima, a diferença mesmo é que um é pra 1 elemento só e esse pode ser para vários, seus parâmeros são: o objeto em questão e os elementos que vão ser adicionados e configurados.
function Carro(marca, preco, ano, serialNumber) {
    Object.defineProperties(this, {
        marca: {
            enumerable: true,
            value: marca,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        ano: {
            enumerable: true,
            value: ano,
            writable: false,
            configurable: false
        },
        serialNumber: {
            enumerable: false,
            value: serialNumber,
            writable: false,
            configurable: false
        }
    })
}
const civic = new Carro('Honda', 300000, 2007, 145335)
console.log(civic)
console.log(Object.keys(civic))