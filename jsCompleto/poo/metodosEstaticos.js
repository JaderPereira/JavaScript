//Sobre métodos em classes/funções construtoras e fabricadoras já vimos bastante, agora tem uma parada diferente, se liga, quando a gente chama um método é sempre pela instancia criada pela classe/construtor, isto é, a gente acessa os métodos pelo objeto que a gente criou com a classe/construtor. Métodos estáticos são iteis quando eu quero fazer um método que não depende da criação de uma instancia, até porque o método estático não tem acesso a nenhuma intancia da classe/construtor.
class ControleRemoto {
    constructor (tv) {
        this.tv = tv,
        this.volume = 0
    }

    //métodos de instância
    aumentarVolume() {
        this.volume += 2
    }
    
    diminuiVolume() {
        this.volume -= 2
    }

    //método estático
    static trocaPilha() {
        console.log('troquei a pilha chefe')
        console.log(this.volume) //da undefined porque um método estático não tem acesso a atributos gerados do construtor
        console.log(this) //o this faz referencia ao objeto em que ele foi criado
    }
}

const c1 = new ControleRemoto('LG')
c1.aumentarVolume()
c1.aumentarVolume()
console.log(c1)

ControleRemoto.trocaPilha()
