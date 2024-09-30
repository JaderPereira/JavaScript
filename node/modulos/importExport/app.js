//const mod1 = require('./mod1')
//const falaNome = mod1.falaNome
//console.log(mod1.falaNome())

const { nome, sobrenome, falaNome, Pessoa } = require('./mod1')
console.log(nome)
console.log(sobrenome)
console.log(falaNome())

const p1 = new Pessoa('Jader')
console.log(p1.nome)
