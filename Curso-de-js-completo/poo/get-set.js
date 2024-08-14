//No programa abaixo temos uma classe que cria um carro, está sendo criado um fusca, ele tem um nome(fusca) e uma velocidade(0), depois de sua criação, tem um for que faz com que ele acelere até a velocidade máxima.
//getters e setter são simples, quando você está atribuindo um valor a algo(set) você está fazendo um setter, e quando você está pegando para mostrar um valor de algo(get) você está fazendo um getter.
//o setter tem que, obrigatoriamente ter um parâmetro que vai ser o valor que está sendo atruido


const _velocidade = Symbol('velocidade')

class Carro {
    constructor (nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor > 100 || valor < 0) return
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if(this.velocidade >= 100) return
        this.velocidade++
    }

    freiar() {
        if(this.velocidade <= 0) return
        this.velocidade--
    }
}

const c1 = new Carro('Fusca')
for(let aux = 0; aux <= 200; aux++) {
    c1.acelerar()
}
//agora vamos supor que tem aquele cabra que veio pra causar e derrepente faz uma merda no seu código e coloca a velodcidade em 2000, e ela vai ser 2000 porque o programa so checa a velocidade na hora de acelerar e freiar, pra isso utilizamos getters e setters. Também será utlizado o Symbol para deixar a propriedade inumeravel

c1.velocidade = 2000  // n roda pq caiu no setter, o setter analisou o valor e viu q n podia

console.log(c1)