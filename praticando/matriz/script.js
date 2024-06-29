let linhasInput = document.querySelector('#linhas')
let colunasInput = document.querySelector('#colunas')
let enviar = document.querySelector('.enviar')
let matriz = document.querySelector('.matriz')
let lei = document.querySelector('.lei')
let i = 1, j = 1
console.log(matriz)

enviar.addEventListener('click', function criaMatriz() {
    matriz.innerHTML = ''
    j = 1
    for(let aux = 0; aux < linhasInput.value; aux++) {
        criaLinha()
        j++
    }
});

function criaLinha () {
    let linha = document.createElement('tr')
    linha.setAttribute('class', 'linha')
    linha.innerHTML = ''
    matriz.appendChild(linha)
    console.log(linha)
    i = 1

    for(let aux = 0; aux < colunasInput.value; aux++) {
        let celula = document.createElement('td')
        linha.appendChild(celula)
                          //muda a lei de formação aqui, no futuro ajeita o programa pra pra ele reconhecer uma lei de formação que o usuario digitar porfavor
        celula.innerHTML = eval(lei.value)
        console.log(celula)
        i++
    }
    console.log(matriz)
}