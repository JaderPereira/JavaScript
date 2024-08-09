function Conta(agencia, conta, saldo) {
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo > valor) {
        this.saldo -= valor
        this.verSaldo()
    } else {
        this.verSaldo()
        console.log('Saldo insuficiente')
    }
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()

}
Conta.prototype.verSaldo = function () {
    console.log(`Conta: ${this.conta} Saldo: R$${this.saldo.toFixed(2)}`)
}


const conta1 = new Conta(1, 2313, 4)
conta1.sacar(12)

console.log('\n ')

function ContaCorretente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorretente.prototype = Object.create(Conta.prototype)
ContaCorretente.prototype.constructor = ContaCorretente

ContaCorretente.prototype.sacar = function (valor) {
    if(valor < (this.saldo + this.limite)) {
        this.saldo -= valor
        this.verSaldo()
    } else {
        this.verSaldo()
        console.log('Saldo insuficiente')
    }
}

const contaCorretente1 = new ContaCorretente(1, 1223, 0, 100)
contaCorretente1.sacar(14)
contaCorretente1.depositar(100)

console.log('\n')

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const contaPoupanca1 = new ContaPoupanca(1, 132, 0)
contaPoupanca1.depositar(100)
contaPoupanca1.sacar(101)