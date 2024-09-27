export default class validaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
                enumerable: false, 
                writable: false,
                configurable: true,
                value: cpf.replace(/\D+/g, '')
            })
        this.cpfArray = Array.from(this.cpfLimpo)
    }

    static geraDigito(cpfArray) {
        let noveDigitos = cpfArray.split('').slice(0, cpfArray.length).map(Number)
        let sequencia = noveDigitos.length + 2
        
        let primeiroDigito = noveDigitos.reduce((acumula, valor) => {
            sequencia--
            let calculo = acumula + (valor * sequencia )
            return calculo
        }, 0)
        primeiroDigito = (11 - (primeiroDigito % 11))
        if(primeiroDigito >= 10) primeiroDigito = 0

        return primeiroDigito
    } 

    sequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }

    validaCPF () {
        if(this.cpfLimpo === '') return 'Calabreso'
        if(this.cpfLimpo.length !== 11 && this.cpfLimpo.length !== 9) return 'Tadalafilo'
        if(this.sequencia()) return 'Iveto sangalo'

        return 'CPF Válido'
    }
}

let p1 = new validaCPF('22189508711')
console.log(p1.validaCPF())