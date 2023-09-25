// f(x) = (a*(x*x)) + (b*x) + c
// delta = -(b*b) (- 4*(a*c))
//Xv = -b : (2*a)
//Yv = -delta : (4*a)

let abc = [1, -4, 3]         //A, B, e C

let concavidade

let x = 1

let delta = (abc[1] * abc[1]) - 4 * (abc[0] * abc[2])

if (abc[0] > 0) {
    concavidade = "concavidade pra cima"
} else if (abc[0] < 0) {
    concavidade = "concavidade para baixo"
}

function raiz (delta) {
    let raizDelta
    
    for(let aux = 0 ; aux < delta; aux++) {
        if ((aux*aux) == delta) {
            raizDelta = aux
        }
    }

    let x1 = (((-1) * abc[1]) + raizDelta) / (2 * abc[0])
    let x2 = (((-1) * abc[1]) - raizDelta) / (2 * abc[0])

    return console.log("X1 da função é:",x1,". E x2 é:",x2)
}

function vertice () {
    let verticeX = ((-1) * abc[1]) / (2 * abc[0])
    
    let verticeY = (-1) * delta / (4 * abc[0])
    
    return console.log("o valor do X do vértice é:",verticeX,", e o valor do vértice Y é:",verticeY,". V=(",verticeX,",",verticeY,")")
}

function f_numero (x) {
    let form = (abc[0] * (x*x)) + (abc[1] * x) + abc[2]
    
    return form
}

console.log("função:",f_numero(x))
console.log(concavidade)
raiz(delta)
vertice()
console.log("Ponto C:",abc[2])