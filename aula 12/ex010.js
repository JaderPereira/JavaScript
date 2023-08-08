var agora = new Date()
var hora = agora.get

console.log(`agora sao ${hora} horas`)

if (hora >= 5 && hora <= 12) {
    console.log(`bom dia`)
} else 
if (hora >= 13 && hora <=18) {
    console.log(`boa tarde`)
} else
if (hora >= 19 && hora <= 24) {
    console.log(`boa noite`)
} else {
    console.log(`boa madrugada`)
}
 







/*
manha - 5 a 12
tarde - 13 a 18
noite - 19 a 24
madrugada - 1 a 4
*/