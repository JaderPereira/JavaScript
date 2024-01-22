//com array
const carros = ['HB20', 'Corolla', 'Civic']

//método normal do for para iterar(percorrer) um array
//for (let aux = 0 ; aux < carros.length ; aux++) {
//    console.log(carros[aux])
//}

//método com o for in(bem mais simples)
for (let aux in carros) {
    console.log('Índice',aux,':',carros[aux])
}

//com objeto
const pessoa = {
    nome: 'Jader',
    sobrenome: 'Pereira',
    idade: 16
}
//para iterar objetos, não conseguir fazer isso com o for clássico
for (let propriedade in pessoa) {
    console.log(pessoa[propriedade])
}