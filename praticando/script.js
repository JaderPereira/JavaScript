
let linhasInput = document.querySelector('#linhas')
let colunasInput = document.querySelector('#colunas')
let leiInput = document.querySelector('#lei')
let enviar = document.querySelector('.enviar')
let matriz = document.querySelector('.matriz')
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
        let leiDeFormacao = null
        linha.appendChild(celula)


        for(let aux = 0; aux < 30; aux++) {
            let caracter = leiInput.value.charAt(aux)
            caracter.replace(/\s+/g, "")
            /*
            if(caracter != " ") {
                if(caracter == "+") {
                    
                }
                if(caracter == "-") {
                    leiDeFormacao -= Number(caracter)
                }
                if(caracter == "/") {
                    leiDeFormacao /= Number(caracter)
                }
                if(caracter == "*") {
                    leiDeFormacao *= Number(caracter)
                }
                leiDeFormacao += Number(caracter)
            }
            */


            console.log(leiInput.value.replace(/\s+/g, ""), leiInput.value.lenght)
            console.log(leiInput.value.charAt(aux)," ", leiDeFormacao)
        }
        

        celula.innerHTML = leiDeFormacao
        console.log(celula)
        i++
    }
    console.log(matriz)
}



/*
let lei = document.querySelector('#lei')
function calcula() {
    document.write(Number(lei.value.charAt(0)) + Number(lei.value.charAt(1)))
    for(let aux in lei.value) {
        document.write(lei.value.charAt(aux))
    }
} 
*/