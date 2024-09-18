//copiando objetos(spread operator e assign)
    const pessoa1 = { nome: 'Jader', idade: 17 }
    //com o spread operator
    const pessoa2 = { ...pessoa1 }
    pessoa2.nome = 'Miguel'
    console.log(pessoa1, pessoa2)

    //com o object.assign()
    //O assign vai receber 3 parâmetros, o primeiro vai ser um objeto vazio, o segundo vai ser o valor que aquele objeto vazio vai ser preenchido e o terceiro pode ser qualquer atributo q tu quer adicionar a mais ai.
    const pessoa3 = Object.assign({}, pessoa1, {nascimento: 2003})
    pessoa3.nome = 'Marcelo'
    console.log(pessoa3)

//object.keys() vai mostrar as chaves do objeto, da até pra iterar sobre um objeto com isso
    console.log(Object.keys(pessoa1))
    for(let chave in pessoa1) {
        console.log(pessoa1[chave])
    }

//object.freeze() vai bloquear qualquer ação que a gente quiser fazer no objeto
Object.freeze(pessoa3)
pessoa3.idade = 10    //n vai rodar pq o objeto ta freeze
console.log(pessoa3)

//Object.getOwnPropertyDescriptor() vai mostrar propriedades daquele atributo
    const produto = { nome: 'Caneca', preco: 50 }
    console.log(Object.getOwnPropertyDescriptor(produto, 'preco'))
    Object.defineProperty(produto, 'preco', {
        writable: false,
        configurable: false
    })
    console.log(Object.getOwnPropertyDescriptor(produto, 'preco'))

//Object.values() vai mostrar os valores dentro do objeto em questão, msm coisa q o object.keys() so que ao inves dos nomes dos atributos, ele vai retornar os valores
    console.log(Object.values(produto))

//object.entries() vai fazer a função do object.values combinado com o object.values
console.log(Object.entries(produto))

for(let entry of Object.entries(produto)) {
    console.log(entry)
}