let data = new Date()             //cria uma variável que contem a biblioteca nativa Date() nessa biblioteca posso acesssar várias funcionalidades, como as abaixo:
let ano = data.getFullYear()      //a variável ano recebe uma funcionalidade dentro da biblioteca Date() que pega o ano
let mes = data.getMonth()         //a variável mes recebe o mes
let dia = data.getDate()          //recebe o dia do mes
let diaSemana = data.getDay()     //recebe o dia da semana

let horas = data.getHours()       //pega as horas
let min = data.getMinutes()       //por ai vai
let sec = data.getSeconds()
let mili = data.getMilliseconds()

console.log(data.toString())    
console.log(data)
console.log(ano)
console.log(mes + 1)//a funcionalidade getMonth() que ta tendo seu valor atribuido a variável mês, funciona como um objeto, então ela começa do zero, +1 faz ajustar isso
console.log(dia)
console.log(diaSemana + 1)  //mesma situação do mês
console.log()
console.log(horas)
console.log(min)
console.log(sec)
console.log(mili)
