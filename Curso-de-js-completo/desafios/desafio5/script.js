function adicionarElementos () {
    const elementos = [
        {tag: 'p', texto: 'frase1'},
        {tag: 'div', texto: 'frase2'},
        {tag: 'footer', texto: 'frase3'},
        {tag: 'section', texto: 'frase4'}
    ]
    let div = document.createElement('div')
    for(let aux = 0 ; aux < elementos.length ; aux++) {
        let { tag, texto } = elementos[aux]
        let tagCriada = document.createElement(tag)
        tagCriada.innerHTML = texto
        div.appendChild(tagCriada)
        //Meu jeito de fazer o exercício abaixo(sim só essa linha.)
        //document.getElementById('big').innerHTML += `<${elementos[aux].tag}>  ${elementos[aux].texto}  </${elementos[aux].tag}>`
    }
    document.getElementById('big').appendChild(div)
}
adicionarElementos()