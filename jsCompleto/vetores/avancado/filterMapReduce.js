//Dá pra colocar o filter, map e redice tudo junto, se liga

const numeros = [1, 2, 3, 4, 10, 54, 6, 32, 76]
//numeros.filter((valor) => valor % 2 == 0).map((valor) => valor * 2).reduce((acumulador, valor) => acumulador + valor)
const numerosMod = numeros
.filter((valor) => valor % 2 == 0)
.map((valor) => valor * 2)
.reduce((acumulador, valor) => acumulador + valor)


console.log(numerosMod)