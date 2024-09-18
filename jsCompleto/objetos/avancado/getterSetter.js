function Pessoa (nome, idade) {
    this.idade = idade

    Object.defineProperty(this, 'nome', {
        enumerable: true,
        configurable: true,

        get: () => {
            return nome
        },
        set: (valor) => {
            console.log(valor)
            if(typeof valor !== 'string') {
                return
            }
            nome = valor
        }
    })
}

const p1 = new Pessoa('Jader', 17)
p1.nome = 'Eva'
console.log(p1)
console.log(p1.nome)