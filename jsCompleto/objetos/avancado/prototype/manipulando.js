//aprendendo como manipular prototypes
let objA = {
    atributoA: 'A'
//  __proto__: Object.prototype
}

let objB = {
    atributoB: 'B'
//  __proto__: Object.prototype
}

let objC = {
    atributoC: 'C'
//  __proto__: Object.prototype
}

//Object.setPrototypeOf() vai fazer um link dentro de um prototype, como nesse primeiro prototype, o que está sendo feito ali é que o objA vai passar a ficar dentro do prototype de B, e na linha seguinte diz que o objB vai ficar dentro do prototype do objC, abre no teu navegador e ve que vai formar uma escadinha de prototype.
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objC)

//Falando sobre o console, quando você quiser ver o prototype de um objeto NÃO utilize nomeDoObjeto.__proto__ pois isso pode acabar reduzindo sua performace, para você checar seu prototype utilize o método:

console.log(Object.getPrototypeOf(objB))  //mostra o prototype do B que é o objA e seu prototype.



function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

//declaração das funções no prototype
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * percentual / 100)
}
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * percentual / 100)
}

const produto1 = new Produto('Camisa', 50)
const produto2 = new Produto('Microondas', 5000)
const produto3 = new Produto('Meia', 10)

//alterações feita pelos métodos criados no prototype
produto2.desconto(5)
produto1.aumento(100)
produto3.aumento(1)

console.log(produto1)
console.log(produto2)
console.log(produto3)

//podemos ter um objeto literal que queremos utilizar algum método de um prototype que definimos pelo código, como é o caso dos produtos que estão recebendo aumento e desconto.
const produto4 = {
    nome: 'Pote',
    preco: 15
}

//se eu tentar colocar 'produto4.desconto(30)' vai dar erro porque a função desconto não está no prototype desse objeto(produto4). para adicionarmos aumento e desconto no prototype do produto4 a gente usa um método visto antes.

Object.setPrototypeOf(produto4, Produto.prototype)
produto4.desconto(30)

console.log(produto4)

//Dá pra atribuir um prototype no momento da criação do objeto assim:
const produto5 = Object.create(Produto.prototype)
produto5.preco = 43  //precisamos colocar o preço porque os 2 métodos utilizam o preço, se tirar da erro
produto5.aumento(40)

console.log(produto5)