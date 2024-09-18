//diveras formas de mostrar a mesma função só que de maneira reduzida
/* 
function maior (num1, num2) {
    if(num1 > num2) {
        return num1
    } else {
        return num2
    }
}
*/

/* 
function maior (num1, num2) {
    if(num1 > num2) return num1
    return num2
}
*/

/* 
function maior (num1, num2) {
    return num1 > num2 ? num1:num2
}
*/

/*
const maior = (num1, num2) => {
    return num1 > num2 ? num1:num2
}
*/

const maior = (num1, num2) => num1 > num2 ? num1:num2
console.log(maior(7, 4))