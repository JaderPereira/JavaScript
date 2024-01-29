const relogio = document.getElementById('relogio')
const iniciar = document.getElementById('iniciar')
const pausar = document.getElementById('pausar')
const zerar = document.getElementById('zerar')
let min  = 0
let hora = 0
let sec = 0
let contando

iniciar.addEventListener('click',() => {
    clearInterval(contando)
    if(relogio.style.color == 'red') {
        relogio.style.color = 'black'
    }
    contando = setInterval(() => {
        sec++
        if(sec == 60) {
            min++
            sec = 0
        }
        if(min == 60) {
            hora++
            min = 0
        }
        
        if(hora > 9) {
            if(min > 9) {
                sec > 9? relogio.innerHTML = `${hora}:${min}:${sec}` : relogio.innerHTML = `${hora}:${min}:0${sec}`
            } else {
                sec > 9? relogio.innerHTML = `${hora}:0${min}:${sec}` : relogio.innerHTML = `${hora}:0${min}:0${sec}`
            }
        } else if(min > 9) {
            sec > 9? relogio.innerHTML = `0${hora}:${min}:${sec}` : relogio.innerHTML = `0${hora}:${min}:0${sec}`
        } else if(sec > 9) {
            relogio.innerHTML = `0${hora}:0${min}:${sec}`
        } else {
            relogio.innerHTML = `0${hora}:0${min}:0${sec}`
        }
        
    }, 1000)
})

pausar.addEventListener('click',() => {
    relogio.style.color = 'red'
    clearInterval(contando)
})

zerar.addEventListener('click',() => {
    if(relogio.style.color == 'red') {
        relogio.style.color = 'black'
    }
    hora = 0
    min = 0
    sec = 0
    clearInterval(contando)
    relogio.innerHTML = `0${hora}:0${min}:0${sec}`
})