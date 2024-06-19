let v = 200
let a = 180
let f = 100
let p = 120
let resultado = 0

while(v > a || v > f || v > p) {
    if (a < v) {
        v -= a
    } else if (f < v) {
        v -= f
    } else if (p < v) {
        v -= p
    }
    resultado++
}

console.log(resultado)
