function meuEscopo () {
    const form = document.querySelector('.form')

    let cadastro = []
    function enviou (evento) {
        evento.preventDefault()

        let nome = form.querySelector('.nome')
        let sobrenome = form.querySelector('.sobrenome')
        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')

        cadastro.push(pessoa = {nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value})
        document.getElementById('saida').innerHTML = `nome: ${cadastro[cadastro.length-1].nome} sobrenome: ${cadastro[cadastro.length-1].sobrenome} peso: ${cadastro[cadastro.length-1].peso} altura: ${cadastro[cadastro.length-1].altura}`

        console.log(cadastro)
    }

    form.addEventListener('submit', enviou)
}
meuEscopo()