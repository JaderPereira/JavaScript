class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome,
        this.ligado = false
    }

    ligar() {
        if(this.ligado == true) {
            console.log('Já ligado')
        }
        
        this.ligado = true
    }
    desligar() {
        if(this.ligado == false) {
            console.log('Já desligado')
        }
        
        this.ligado = true
    }
}

const d1 = new DispositivoEletronico('celular')
console.log(d1)

//agora que temos uma classe para despositivos eletronicos vou fazer uma classe mais especifica que vai ser herdeira de DispositivosEletronicos

//Quando eu escrevo a palavra extendes, eu falo pro programa: Olha, você vai pegar a classe que tá depois do extends e vai colocar dentro do Smarthphone. isso so funciona se não tiver nada de novo na classe filha
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome),    //sem isso dá erro falando que tem q ter uma chamada da classe pai/super
        this.cor = cor
    }
}

const s1 = new Smartphone('Samsumg', 'preto')
console.log(s1)     //nome e ligado, como na calsse DispositivoEletronico
