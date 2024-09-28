import geraCaracter from './geraCaracter'

const botao = document.querySelector('.botao-gerar')

botao.addEventListener('click', () => {
    const chkMaiusculas = document.querySelector('.chk-maiusculas')
    const chkMinusculas = document.querySelector('.chk-minusculas')
    const chkNumeros    = document.querySelector('.chk-numeros')
    const chkSimbulos   = document.querySelector('.chk-simbolos')
    const tamanho       = document.querySelector('.tamanho')
    let senha = ""

    for(let aux = 1; aux <= tamanho.value; aux = aux) {
        if(aux <= tamanho.value) {
            if(chkMaiusculas.checked) {
                senha += geraCaracter('maiuscula')
                aux++
            } 
        }
        if(aux <= tamanho.value) {
            if (chkMinusculas.checked) {
                senha += geraCaracter('minuscula')
                aux++
            }
        }
        if(aux <= tamanho.value) {
            if (chkNumeros.checked) {
                senha += geraCaracter('numero')
                aux++
            }
        }
        if(aux <= tamanho.value) {
            if (chkSimbulos.checked) {
                senha += geraCaracter('simbolo')
                aux++
            }
        }
    }

    document.querySelector('.resultado').innerHTML = senha
})
