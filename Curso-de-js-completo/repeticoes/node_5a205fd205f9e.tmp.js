function random(min, max) {
    const numeroAleatorio = Math.random() * (max - min) + min
    return numeroAleatorio.toFixed()
}
let varRandom = random(1, 40)

while (varRandom !== 10) {
    varRandom = random(1, 40)
    console.log(varRandom)
}