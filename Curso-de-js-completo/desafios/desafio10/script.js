const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function criaHora(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

document.addEventListener('click', (e) => {
    const elemento = e.target
    if(elemento.classList.contains('zerar')) {
        if(relogio.style.color == 'red') relogio.style.color = 'black'
        segundos = 0
        relogio.innerHTML = criaHora(segundos)
        clearInterval(timer)
    }
    if(elemento.classList.contains('iniciar')) {
        clearInterval(timer)
        if(relogio.style.color == 'red') relogio.style.color = 'black'
        iniciaTimer()
    }
    if(elemento.classList.contains('pausar')) {
        relogio.style.color = 'red'
    clearInterval(timer)
    }
})

function iniciaTimer () {
    clearInterval(timer)
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criaHora(segundos)
    }, 1000)
}

/*
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
*/