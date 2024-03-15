
let colunasInput = Number(document.querySelector('#colunas'))
let linhasInput = Number(document.querySelector('#linhas'))
let enviar = document.querySelector('#enviar')
let matriz = document.querySelector('#matriz')
let leiDeFormacao = i*4 - j
let j, i
console.log(matriz)

enviar.addEventListener('click', criaMatriz())
function criaMatriz (colunasInput, linhasInput) {
    for(let aux = 0; aux < linhasInput; aux++) {
        criaLinha()
    }
}
function criaLinha () {
    let linha = matriz.appendChild('tr')
    for(let aux = 0; aux < colunas; aux++) {
        let celula = linha.appendChild('td')    
    }
}