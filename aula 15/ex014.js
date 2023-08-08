let num = [5, 8, 2, 9, 3]          //isto é uma array(vetor), array é uma variavel que contem mais de um elemento
num.sort()
console.log(num)
console.log(`nosso vetor tem ${num.length} elementos`)
/*for(let p=0;p<num.length;p++) {
    console.log(`a posição ${p} tem o valor ${num[p]}`)
}*/

for(let pos in num){
    console.log(`a posição ${pos} contem o valor ${num[pos]}`)
}
/*if (num.indexOf(7)==-1) {
    console.log(`este valor nao foi encontrado`)
}
if (num[0]==5 && num[1]==8) {
    console.log(`os valores foram encontrados`)
}*/