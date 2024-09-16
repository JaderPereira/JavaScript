//Usando ajax meu parceiro, essa parada é uma loucura não sei se consigo te explicar em palavras então vou ver um broxada sinistra e dps tu ajeita ai brother


document.addEventListener('click', alvo => {
    const elemento = alvo.target        //alvo.target vai ser retornar o elemnto que foi clicado e que será armazenado na var elemento
    const tag = elemento.tagName.toLowerCase() 

    if(tag === 'a') {
        alvo.preventDefault()
        carregaPagina(elemento)
    }
})

 async function carregaPagina (elemento) {
    try {
        const href = elemento.getAttribute('href')
        const response = await fetch(href)
        
        if(response.status !== 200) throw new Error('errou legal')
            
        const html = await response.text()
        carregaResultado(html)  
    } catch (e) {
        console.error(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}


