//Math.random() gera um número aleatório entre 0 e 1
function random(min, max) {
    const numeroAleatorio = Math.random() * (max - min) + min
    
    return numeroAleatorio.toFixed()
}
console.log(random(4, 7))