import validaCPF from './validaCPF'

export default class geraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formata(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11) 
        )
    }

    geraNovoCPF () {
        let cpfSemDigito = this.rand()
        const digito1 = validaCPF.geraDigito(cpfSemDigito)
        const digito2 = validaCPF.geraDigito(cpfSemDigito + digito1)
        return cpfSemDigito + digito1 + digito2
    }
}
const p1 = new geraCPF()
console.log(p1.geraNovoCPF())