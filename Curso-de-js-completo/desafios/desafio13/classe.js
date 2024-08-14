//exercicio da validação de cpf(feito com constructor function) com classes em Js

class CPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
                enumerable: false, 
                writable: false,
                configurable: true,
                value: cpf.replace(/\D+/g, '')
            })
        //this.cpf = cpf,
        //this.cpfLimpo = cpf.replace(/\D+/g, ''),
        this.cpfArray = Array.from(this.cpfLimpo)
    }

    sequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }

    validaCPF () {
        if(this.cpfLimpo === '') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.sequencia()) return false

        this.cpfArray = Array.from(this.cpfLimpo)
        let cpfArrayCopia = [...this.cpfArray].map(Number)
        let doisDigitosReal = [...cpfArrayCopia].splice(9, 12).join('') //pega os 2 ultimos digitos do cpf e transforma em uma string
        let doisDigitosCalculado = ''
        
        for(let aux = 0; aux < 2; aux++) {
            aux == 0? cpfArrayCopia = cpfArrayCopia.splice(0, 9) : cpfArrayCopia.push(Number(this.cpfArray[this.cpfArray.length - 2]))
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
}


const cpf1 = new CPF('705.484.450-52')
console.log(cpf1.validaCPF())