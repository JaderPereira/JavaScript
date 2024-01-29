function mostraHora (data) {
    if(!data) {
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        minute: '2-digit',
        hour: '2-digit',
        second: '2-digit'
    })
}

const contador = setInterval(function () {
    console.log(mostraHora())
}, 1000)

setTimeout(function () {
    clearInterval(contador)
}, 3000)

setTimeout(() => {
    console.log('Olá, mundo!')
}, 5000);

