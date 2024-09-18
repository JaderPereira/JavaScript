function calcularArea (largura, altura) {
    let area = largura*altura
    return area
}

let area = calcularArea()

if ( isNaN(area) ) {
    console.log('você não inseriu nenhum valor!')
} else {
    console.log(area)
}



//          o valor de 10 foi atribuido a variável largura e 30 foi atribuido a variável altura