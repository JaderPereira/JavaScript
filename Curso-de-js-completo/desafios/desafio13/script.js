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
    
    if(cpfLimpo === '') {
        
    } else if(cpfLimpo.length !== 11){
        resultado.innerText = 'Tamanho incorreto'
    } else if(sequencia()) {
        resultado.innerText = 'CPF inválido'
    } else {
        resultado.innerText = validaDoisDigitos()
    }
    

    //constructor function que foi criada no exercicio de validar cpf, essa função foi construida porque posteriormente deve ter um exercicio que utiliza uma constructor function, então vou deixar ela salva aqui, é a mesma coisa que a função de baixo só que traduzida pra uma constructor function.
    function ValidaCPF() {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function () {
                return cpfLimpo
            }
        })
    }

    ValidaCPF.prototype.sequencia = function () {
        //Essa função vai servir para quem sequencias não sejam feitas, por exemplo: se calcularmo o cpf 111.111.111-11 vai dizer que ele existe, porem esse cpf não é possivel, então devemos fazer essa checagem para que não acorra esse problema.  
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }

    ValidaCPF.prototype.valida = function () {
        if(this.cpfLimpo === '') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.sequencia()) return false


        let cpfArrayCopia = [...cpfArray].map(Number)
        let doisDigitosReal = [...cpfArrayCopia].splice(9, 12).join('') //pega os 2 ultimos digitos do cpf e transforma em uma string
        let doisDigitosCalculado = ''
        
        for(let aux = 0; aux < 2; aux++) {
            aux == 0? cpfArrayCopia = cpfArrayCopia.splice(0, 9) : cpfArrayCopia.push(Number(cpfArray[cpfArray.length - 2]))
            let sequencia = cpfArrayCopia.length + 2

            let resultado = cpfArrayCopia.reduce((acumula, valor) => {
                sequencia--
                return acumula + (valor * sequencia )
            }, 0)

            resultado = (11 - (resultado % 11))
            if(resultado >= 10) resultado = 0   //se o digito for maior que 10, no cpf é considerado como 0

            doisDigitosCalculado += resultado
        }
        return String(doisDigitosCalculado) == String(doisDigitosReal)? 'CPF válido':'CPF inválido'
    }

    const cpf1 = new ValidaCPF()
    console.log(cpf1.sequencia())
    console.log(cpf1.valida())
}



//
//
//Separação do código da constructor function e do código da função normal pro HTML
//
//


function sequencia () {
    const sequencia = cpfLimpo[0].repeat(cpfLimpo.length)
    return sequencia === cpfLimpo
}



//Essa função aqui foi feita para um site normal em html com JavaScript, diferente da constuctor function acima que não tem interação com a pagina e so com o console
function validaDoisDigitos () {
    let cpfArrayCopia = [...cpfArray].map(Number)
    let doisDigitosReal = [...cpfArrayCopia].splice(9, 12).join('') //pega os 2 ultimos digitos do cpf e transforma em uma string
    let doisDigitosCalculado = ''
    
    for(let aux = 0; aux < 2; aux++) {
        aux == 0? cpfArrayCopia = cpfArrayCopia.splice(0, 9) : cpfArrayCopia.push(Number(cpfArray[cpfArray.length - 2]))
        let sequencia = cpfArrayCopia.length + 2

        let resultado = cpfArrayCopia.reduce((acumula, valor) => {
            sequencia--
            return acumula + (valor * sequencia )
        }, 0)

        resultado = (11 - (resultado % 11))
        if(resultado >= 10) resultado = 0   //se o digito for maior que 10, no cpf é considerado como 0

        doisDigitosCalculado += resultado
    }
    return String(doisDigitosCalculado) == String(doisDigitosReal)? 'CPF válido':'CPF inválido'    
}