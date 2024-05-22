//Código da calculadora feita com uma factory function.
/*Súmario
    .btn = todos os botões
    .btn-eq = Botão de igual
    .btn-clear = botão de apagar tudo
    .btn-del = botão de apagar 1 caracter
    .btn-num = Todos os botões de números
    .display = telinha aonde aparece a conta e o resultado
*/

function criaCalculadora() {
    return {  //objeto a ser retornado
        display: document.querySelector('.display'),

        inicia() {
            //O this aqui está referenciando a calculdora
            this.clicaBotao()
            this.pressEnter()
        },

        pressEnter () {
            //Nessa função aqui do pressEnter eu to usando uma arrow function ent n tenho q colocar ".bind" no final da função pra falar q o this ta referenciando a calculadora
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        clicaBotao () {
            //Para fazer a função do click eu usei uma função anônima normal, mas se eu fosse usar uma arrow function (() => {}) ele não iria mudar o this pra 'document' e iria continuar no objeto, use isso de maneira consciente, não faça confusão porque caso tu vá usar uma função anônima q nem um usei tem q colocar o método bind no final da função, faz oq tu achar mais facil ai lek.
            document.addEventListener('click', function (e) {
                //O this aqui está referenciando o documento, precisamos deixar com que o this esteja referenciando a calculdora novamente
                const alvo = e.target
                if(alvo.classList.contains('btn-num')) {
                    this.btnParaDisplay(alvo.innerText)
                }

                if(alvo.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if(alvo.classList.contains('btn-clear')) {
                    this.displayClear()
                }

                if(alvo.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            //O método .bind faz com que o this seja referenciado de modo correto, referenciando o objeto calculadora em questão
            }.bind(this))
        },

        realizaConta () {
            let conta = this.display.value

            try {
                //a função eval vai pegar um texto e vai tentar transformar ele em JavaScript, ela é mt util mas pode ser perigosa para a segurança do código pois é possivel abrir o console no navegador e fazer perguntas pra essa função e ela pode te retornar informações que não eram pra ser destribuidas no seu código, por isso temos uma verificação de erro mais abaixo.
                conta = eval(conta)

                if(!conta) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = String(conta)
            } catch (error) {
                alert('Conta inválida')
                return
            }
        },

        apagaUm () {
            //o slice(0, -1) vai tirar o ultimo caracter do display
            this.display.value = this.display.value.slice(0, -1)
        },

        displayClear() {
            this.display.value = ''
        },

        btnParaDisplay (valor) {
            this.display.value += valor
        },
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()