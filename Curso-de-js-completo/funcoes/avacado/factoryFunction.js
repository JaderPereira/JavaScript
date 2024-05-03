function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,

        //da pra declarar um metodo assim e assim: "fala(assunto) {...}"
        fala: function (assunto) {
            return `${nome} está ${assunto}.`
        },
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Jader', 'Pereira', 1.7, 55)
console.log(p1.fala('falando sobre JS'))
console.log(p1.sobrenome)
console.log(p1.imc)