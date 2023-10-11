let areaRetangulo = function (base, altura) {   //a função foi declarada sem um nome, mas podemos chamar se colocarmos ela dentro de um variável e chamar ela.
    return base * altura
};
console.log(areaRetangulo(4, 30))  //chamada da função anonima pela variável que ela esta armazenada, vale reparar que os paramentros são iguais de uma função normal.


let areaQuadrado = (lado) => {
    return lado*4
}

console.log(areaQuadrado(4))

/*
let areaQuadrado = lado => return lado*4
*/

//no comentario de ima podemos ver a mesma arrow function mais acima só que de maneira mais simplificada, quando temos apenas uma linha de código na função podemos retirar as chaves e do lado da seta da arrow function.
//quando temos apenas 1 parametro, podemos retirar os parenteses dele sem problema algum.
