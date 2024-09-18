let data = new Date()
let diaSemanaNum = data.getDay()
let diaSemanaTexto
let diaMes = data.getDate()
let mesNum = data.getMonth()
let mesTexto
let ano = data.getFullYear()
let minuto = data.getMinutes()
let segundo = data.getSeconds()

switch(diaSemanaNum) {
    case 0: diaSemanaTexto = "Domingo"; break
    case 1: diaSemanaTexto = "Segunda-feira"; break
    case 2: diaSemanaTexto = "Terça-feira"; break
    case 3: diaSemanaTexto = "Quarta-feira"; break
    case 4: diaSemanaTexto = "Quinta-feira"; break
    case 5: diaSemanaTexto = "Sexta-feira"; break
    case 6: diaSemanaTexto = "Sábado"; break
}

switch(mesNum) {
    case 0: mesTexto = "Janeiro"; break
    case 1: mesTexto = "Fevereiro"; break
    case 2: mesTexto = "Março"; break
    case 3: mesTexto = "Abril"; break
    case 4: mesTexto = "Maio"; break
    case 5: mesTexto = "Junho"; break
    case 6: mesTexto = "Julho"; break
    case 7: mesTexto = "Agosto"; break
    case 8: mesTexto = "Setembro"; break
    case 9: mesTexto = "Outubro"; break
    case 10: mesTexto = "Novembro"; break
    case 11: mesTexto = "Dezembro"; break
}

document.getElementById('texto').innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano} <br> ${minuto}:${segundo}`