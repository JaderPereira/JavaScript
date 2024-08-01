//Criando herança, nesse programa eu vou ter 2 funções construtoras, uma pra produtos genericos e outra pra camisetas, a diferença é que um só tem nome e preço e a função da camiseta tem a cor, não é uma boa prática criar o mesmo objeto em outro lugar, então a gente referencia o construtor produto dentro de camiseta, já que camiseta é um produto. camiseta está contido em produto.
function Produto (nome, preco) {
    this.nome = nome,
    this.preco = preco
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
//  o método call vai fazer com que o construtor 'Produto' seja passado aqui dentro(em 'Camiseta'). O primeiro parâmetro é o lugar/escopo, como é um objeto simples que so tem um escopo o this vai servir perfeitamente, o restante dos parâmetros são os atributos que vão vir pra cá
    Produto.call(this, nome, preco)
    this.cor = cor
}
//agora que sabemos como colocar uma função construtora dentro de outra, temos que ajeitar a questão do prototype, pois com os objetos criados pela função construtora 'Camiseta' não podemos utilizar o método 'Aumento' e 'Desconto', precisamos solucionar esse problema sem replicar esses 2 métodos, apenas referenciado eles.

//vamos lá, tem uma parada aqui que precis ser esclarecida, nossa construtora Produto tem 2 métodos definidos no seu prototype, precisamos passar essse prototype para a construtora Camiseta, não conseguimos fazer dessa forma: 'Object.setPrototypeOf(Camiseta, Produto)' pois não são objetos e não é recomendado fazer desta maneira: 'Camiseta.prototype = Produto.prototype'. a melhor forma é criar um objeto vazio construido pela construtora 'Produto' e atribuir o prototype dela pra Camiseta
Camiseta.prototype = Object.create(Produto.prototype)

//beleza, agora sim temos os métodos da construtora 'Produto' dentro da construtora 'Camiseta' pelo prototype, agora temos um outro problema, quando exibimos o objeto criado pela construtora Camiseta e mostramos no console, diz que quem criou o objeto foi na verdade a construtora Produto, pra mudar isso a gente usa esse comando:
Camiseta.prototype.constructor = Camiseta

//pronto, agora sim!!! Agora vou mostrar que da pra mudar os métodos, por exemplo, o método 'aumento' da construtora 'Produto' faz com que o parâmetro some o preço, na contrutora Camisa eu quero que esse método faça um aumento percentual
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const camiseta1 = new Camiseta('Regata', 50, 'azul')
camiseta1.aumento(50)

console.log(camiseta1)

//vou fazer uma outra herança agora com uma caneca

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco)
    this.material = material
}

Caneca.prototype = Object.create(Camiseta.prototype)
Caneca.prototype.constructor = Caneca

const caneca1 = new Caneca('Francesa', 30, 'Porcelana')
caneca1.aumento(70)

console.log(caneca1)