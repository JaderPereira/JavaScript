//Usando ajax meu parceiro, essa parada é uma loucura não sei se consigo te explicar em palavras então vou ver um broxada sinistra e dps tu ajeita ai brother

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()    //xhr == Xml Https Request
        xhr.open(obj.method, obj.url, true)
        xhr.send(null)
        
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else{
                reject(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', alvo => {
    const elemento = alvo.target        //alvo.target vai ser retornar o elemnto que foi clicado e que será armazenado na var elemento
    const tag = elemento.tagName.toLowerCase() 

    if(tag === 'a') {
        alvo.preventDefault()
        carregaPagina(elemento)
    }
})

async function carregaPagina (elemento) {
    const href = elemento.getAttribute('href')
    console.log(href)
    const objConfig = {
        method: 'GET',
        url: href,
    }
    try {
        const response = await request(objConfig)
        carregaResultado(response)
    } catch(erro) {
        console.log(erro)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}