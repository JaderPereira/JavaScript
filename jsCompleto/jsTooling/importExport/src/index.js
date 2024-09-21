//import { nome as nome2, sobrenome2, idade, soma, Pessoa } from './modulo1'
//import exportDefault from './modulo1'       
import * as modulo1 from './modulo1'
console.log(modulo1)

const nome = 'Calabreso'
const p1 = new modulo1.Pessoa('Paula', 'Rangel')

console.log(nome, modulo1.nome, modulo1.sobrenome2, modulo1.idade)
console.log(modulo1.soma(5, 6))
console.log(p1.nome, p1.sobrenome)