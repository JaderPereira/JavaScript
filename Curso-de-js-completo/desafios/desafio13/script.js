/*
Programa que valida CPF, pra validar um cpf temos que fazer um calculo complexo para verificar se aquele cpf realmente existe, a conta é a seguinte: quando temos um cpf com 11 digitos, os 2 ultimos digitos são gerados a partir dos 9 que estão atras deles com uma formula:
cpf: 705.484.450-52

 7  0  5  4  8  4  4  5  0
(multiplica os de cima com a sequencia de baixo)
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 += 237

a gente pega os 9 primeiro numeros e coloca nessa sequencia de 10 a 2, multiplica os números e soma tudo, com o resultado a gente tem um número que vai se encaixar em uma formula descobrir o primeiro número.

11 - (237 % 11) = 5 (primeiro digito)
se o digito for maior q nove consideramos 0

agora pra calcular o segundo numero a gente usa esse decimo numero novo que conseguimos, fazemos parecido com o calculo do primeiro numero e colocamos aquela mesma formula, é assim:

 7  0  5  4  8  4  4  5  0  5
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 += 284   

11 - (284 % 11) = 2 (segundo digito)
se o digito for maior q nove consideramos 0
*/
let cpf
let cpfLimpo
let cpfArray
let resultado

function enviar() {
    cpf = String(document.querySelector('#cpf').value) //string com ponto e traço
    cpfLimpo = cpf.replace(/\D+/g, '') //expressão regular para deixar somente numeros
    cpfArray = Array.from(cpfLimpo)    //transforma o cpfLimpo em array
    resultado = document.querySelector('#resultado')
    
    resultado.innerText = validaDoisDigitos()
    
    //resultado.innerText += ValidaPrimeiroDigito()
    //resultado.innerText += ValidaSegundoDigito()
}

function validaDoisDigitos () {
    let cpfArrayCopia = [...cpfArray].map(Number)
    let doisDigitosReal = [...cpfArrayCopia].splice(9, 12).join('') //pega os 2 ultimos digitos do cpf e transforma em uma string
    let doisDigitosCalculado = ''
    let sequencia = 11
    
    for(let aux = 0; aux < 2; aux++) {
        if(aux == 0) {
            cpfArrayCopia = cpfArrayCopia.splice(0, 9)//tira os 2 ultimos numeros do cpf na primeira iteração e so o ultimo na segunda
        } else {
            cpfArrayCopia.push(cpfArray[cpfArray.length - 2])
        }

        let resultado = cpfArrayCopia.map((valor) => {  //fiz um map e um reduce de uma vez só pra dar uma agiliazda
            sequencia--
            if(sequencia >= 2) return valor * sequencia 

        }).reduce((acumula, valor) => {
            return acumula + valor
        }, 0)

        resultado = (11 - (resultado % 11))
        if(resultado >= 10) resultado = 0   //se o digito for maior que 10, no cpf é considerado como 0

        sequencia = 12
        doisDigitosCalculado += resultado
    }

    return String(doisDigitosCalculado) == String(doisDigitosReal)? 'CPF válido':'CPF inválido'    
}


/*
function ValidaPrimeiroDigito () {
    let sequencia = 11
    let cpfArrayCopia = cpfArray
    for (let aux in cpfArrayCopia) {
        cpfArrayCopia[aux] = Number(cpfArrayCopia[aux])
    }
    cpfArrayCopia = cpfArrayCopia.splice(0, 9)//tira os 2 ultimos numeros do cpf

    let arrayMultiplicado = cpfArrayCopia.map((valor) => {
        sequencia--
        if(sequencia >= 2) return valor * sequencia 
    })

    let somaMultiplicado = arrayMultiplicado.reduce((acumula, valor) => {
        return acumula + valor
    }, 0)

    console.log(somaMultiplicado)
    return (11 - (somaMultiplicado % 11)) >= 10? 0:(11 - (somaMultiplicado % 11))
}

function ValidaSegundoDigito() {
    let sequencia = 12
    let cpfArrayCopia = cpfArray
    for (let aux in cpfArrayCopia) {
        cpfArrayCopia[aux] = Number(cpfArrayCopia[aux])
    }
    cpfArrayCopia = cpfArrayCopia.splice(0, 10)//tira os 2 ultimos numeros do cpf

    let arrayMultiplicado = cpfArrayCopia.map((valor) => {
        sequencia--
        if(sequencia >= 2) return valor * sequencia 
    })
    let somaMultiplicado = arrayMultiplicado.reduce((acumula, valor) => {
        return acumula + valor
    }, 0)

    return (11 - (somaMultiplicado % 11)) >= 10? 0:(11 - (somaMultiplicado % 11))
} */
