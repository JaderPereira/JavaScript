function random(min, max) {
    const numeroAleatorio = Math.random() * (max - min) + min
    return Math.floor(numeroAleatorio)
}
const min = 1, max = 30
let varRandom = random(min, max)
console.log(varRandom)

while (varRandom != 10) {
    varRandom = random(min, max)
    console.log(varRandom)
}