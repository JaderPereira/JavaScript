let largura = prompt("escolha a largura: ")
let altura = prompt("escolha a altura: ")

let area = calcularArea(largura, altura)

function calcularArea (largura, altura) {
    let area = largura*altura
    return area
}
document.write(area)
//          o valor de 10 foi atribuido a variável largura e 30 foi atribuido a variável altura