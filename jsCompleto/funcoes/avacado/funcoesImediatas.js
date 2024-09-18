(function (idade, peso, altura) {
    const sobrenome = 'Pereira'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Jader'))
    }

    falaNome()
    console.log(idade, peso, altura)
}) (17, 50, 1.69)
/*funcoes imediatas são como um atalho para criar um escopo para o seu código sem poluir o seu escopo global, a sintaxe dela é essa:

(function () { 

}) ()

quando voce coloca esse parenteses dentro dessa função anonima e logo em seguida coloca esse parenteses que nesse código está vazio, voce está chamando a função que imediatamente se invoca, esse parenteses final é utilizado como parametro, tanto que no código la em cima temos valores sendo atribuidos aos parâmetros idade, peso e altura.
*/