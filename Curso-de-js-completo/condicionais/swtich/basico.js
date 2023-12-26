const data = new Date()
let diaSemana = data.getDay()
let semanaTexto
// if(diaSemana === 0) {
//     semanaTexto = "Domingo"
// } else if(diaSemana === 1) {
//     semanaTexto = "Segunda"
// } else if(diaSemana === 2) {
//     semanaTexto = "Terça"
// } else if(diaSemana === 3) {
//     semanaTexto = "Quarta"
// } else if(diaSemana === 4) {
//     semanaTexto = "Quinta"
// } else if(diaSemana === 5) {
//     semanaTexto = "Sexta"
// } else if(diaSemana === 6) {
//     semanaTexto = "Sabado"
// } else {
//     semanaTexto = ""
// }

switch (diaSemana) {
    case 0:     semanaTexto = "Domingo"
    break;
    case 1:     semanaTexto = "Segunda"
    break;
    case 2:     semanaTexto = "Terça"
    break;
    case 3:     semanaTexto = "Quarta"
    break;
    case 4:     semanaTexto = "QUinta"
    break;
    case 5:     semanaTexto = "Sexta"
    break;
    case 6:     semanaTexto = "Sábado"
    break;
    default:    semanaTexto = ""
        break;
}

console.log(semanaTexto)