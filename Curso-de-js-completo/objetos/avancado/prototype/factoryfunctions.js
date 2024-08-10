//vimos como adicionar métodos no prototype de uma constructor function mas não vimos em uma factory function, como podemos ver abaixo, está sendo criado uma variável com nome 'pessoaPrototype' com os métodos que vão ficar no prototype, logo abaixo temos a criação do objeto com o object.create(), com esse método, podemos atrelar todos os métodos de 'pessoaPrototype' para o prototype do objeto criado, então colocamos o pessoaPrototype como primeiro parâmetro e em seguida abrimos uma chave com os atributos que teremos no objeto, no caso desse objeto temos nome e sobrenome, uma vantagem de fazer um objeto assim é que você pode definir as propriedades do atributo diretamente como está sendo feito com o enumerable, configurable, value, writable e caso só queira colocar o valor mesmo, coloque só o value

function CriaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar () {
            console.log(`${this.nome} está falando`)
        },
        
        comer () {
            console.log(`${this.nome} está comendo`)
        },
        
        beber () {
            console.log(`${this.nome} está bebendo`)
        },
    }

    return Object.create(pessoaPrototype, {
        nome:      {enumerable: true,   writable: true,     configurable: true,     value: nome},
        sobrenome: {enumerable: true,   writable: true,     configurable: true,     value: sobrenome}
    })
}

const p1 = CriaPessoa('Jader', 'Pereira')

console.log(p1)
p1.comer()
p1.beber()
p1.falar()

//agora eu vou fazer de uma forma diferente, vou usar o Object.assign() para criar meu prototype

const falar ={  
    falar()  {
        console.log(`${this.nome} está falando`)
    }
}
const comer ={  
    comer()  {
        console.log(`${this.nome} está comendo`)
    }
}

const beber ={  
    beber()  {
        console.log(`${this.nome} está bebendo`)
    }
}

const funcionarioPrototype = Object.assign({} ,falar, comer, beber)

function CriaFunctionario(nome, sobrenome) {
    return Object.create(funcionarioPrototype, {
        nome:      {enumerable: true,   writable: true,     configurable: true,     value: nome},
        sobrenome: {enumerable: true,   writable: true,     configurable: true,     value: sobrenome}
    })
}

const f1 = CriaFunctionario('Paula', 'Rangel')

console.log(f1.prototype)
f1.comer()
f1.beber()
f1.falar()