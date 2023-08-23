let bolas = [
    'bola1',
    'bola2', 
    'bola3'
];
let num = [4, 5, 1, 9]
num.sort()
console.log(num)

for(let p=0; p<num.length ;p++) {
    console.log(`a posição ${p} tem o valor ${num[p]}`)
}
if (num[0]==1 && num[1]==4) {
    console.log(`os valores foram encontrados`)
}