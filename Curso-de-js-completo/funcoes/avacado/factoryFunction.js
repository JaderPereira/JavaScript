function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,

        //da pra declarar um metodo assim e assim: "fala(assunto) {...}"
        fala: function (assunto = 'falando sobre nada') {
            return `${nome} está ${assunto}.`
        },

        //getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto (valor) {
            /*o método split vai fazer com que uma string seja dividada entre seus espaços e crie um array, cada indice contem o valor da string entre os espaços, exemplo: 
                nome = "Jader Pereira Santos"
                nome.split(' ')
                console.log(nome)   O resultado vai ser um array com o primeiro item do índice sendo "Jader", o segundo sendo "Pereira" e o terceiro "Santos"

            obs: bota um espaço no parâmetro desse método pq se n ele vai pegar cada letra como se fosse um elemento, testa ai pra tu ver sem esse espacinho        */
            valor = valor.split(' ')
            console.log(valor)
            //shift vai remover o primeiro índice do array
            this.nome = valor.shift()
            //o método join vai fazer com que o array se torne uma string, seu parâmetro é o que vai ficar entre os valores do array
            this.sobrenome = valor.join(' ')
            console.log(valor)
        }
    }
}
const p1 = criaPessoa('Jader', 'Pereira', 1.7, 55)
p1.nomeCompleto = 'Thales Souza Oliveira'
console.log(p1.fala('falando sobre JS'))
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
console.log(p1.nomeCompleto)

