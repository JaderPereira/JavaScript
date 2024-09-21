const nome = 'Jader'
const sobrenome = 'Pereira'
export const idade = 17

function soma (x, y) {
    return x + y
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }
}

export { nome, sobrenome as sobrenome2, soma }