let inputNome  
let inputSobrenome
let inputCpf
let inputUsuario 
let inputSenha 
let inputConfereSenha

function enviar () {
    inputNome         = document.querySelector('#nome').value
    inputSobrenome    = document.querySelector('#sobrenome').value
    inputCpf          = document.querySelector('#cpf').value
    inputUsuario      = document.querySelector('#usuario').value
    inputSenha        = document.querySelector('#senha').value
    inputConfereSenha = document.querySelector('#confereSenha').value

    let botao        = document.querySelector('#botao')
    let resultado    = document.querySelector('#resultado')


    const usuario1 = new Usuario(inputNome, inputSobrenome, inputCpf, inputUsuario, inputSenha)
    resultado.innerText = usuario1.checaTudo()
}

class Usuario {
    constructor (nome, sobrenome, cpf, usuario, senha) {
        Object.defineProperty(this, 'nome',      {  enumerable: true, configurable: true, writable: true, value: nome  })
        Object.defineProperty(this, 'sobrenome', {  enumerable: true, configurable: true, writable: true, value: sobrenome  })
        Object.defineProperty(this, 'cpf',       {  enumerable: true, configurable: true, writable: true, value: cpf  })
        Object.defineProperty(this, 'usuario',   {  enumerable: true, configurable: true, writable: true, value: usuario  })
        Object.defineProperty(this, 'senha',     {  enumerable: true, configurable: true, writable: true, value: senha  })
    }

    checaTudo() {
        let erros = ''
        if(this.checaNomeESobrenome() === true && this.checaCPF() === true && this.checaSenha() === true) {
            return 'Cadastro concluido'
        } else {
            erros += this.checaNomeESobrenome() !== true? this.checaNomeESobrenome():''
            erros += this.checaCPF() !== true? this.checaCPF():''
            erros += this.checaSenha() !== true? this.checaSenha():''
            console.log(this.exibeUsuario())
            return erros
        }

    }

    checaNomeESobrenome() {
        if(this.nome === '' || this.sobrenome === '' || this.usuario === '') {
            this.nome = ''
            this.usuario = ''
            this.sobrenome = ''
            return 'O campo nome e/ou sobrenome não estão preenchidos corretamente. \n'
        } else {
            this.usuario = inputUsuario
            this.nome = inputNome
            this.sobrenome = inputSobrenome
            return true
        }
    }

    checaSenha() {
        if(this.senha !== '' && (this.senha.length >= 8 && this.senha.length <= 16)) {
            if(this.senha !== inputConfereSenha) {
                this.senha = ''
                return 'As senhas não se correspondem. \n'
            } else {
                this.senha = inputSenha
                return true
            }
        } else{
            this.senha = ''
            return 'O campo Senha deve ter pelo menos 8 caracteres e menos que 17. \n'
        }
    }

    sequenciaCPF() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }

    checaCPF() {
        this.cpfLimpo = this.cpf.replace(/\D+/g, '') //expressão regular para deixar somente numeros
        this.cpfArray = Array.from(this.cpfLimpo)    //transforma o cpfLimpo em array

        if(this.cpf === '') {
            this.cpf = ''
            return 'O campo CPF está vazio \n'
        }
        if(this.cpfLimpo === '') {
            this.cpf = ''
            return 'O CPF deve conter apenas números. \n'
        }
        if(this.cpfLimpo.length !== 11) { 
            this.cpf = ''
            return 'O CPF não tem 11 números \n'
        }
        if(this.sequenciaCPF()) { 
            this.cpf = ''
            return 'CPF inválido \n'
        }
        this.cpfArray = Array.from(this.cpfLimpo)
        let cpfArrayCopia = [...this.cpfArray].map(Number)
        let doisDigitosReal = [...cpfArrayCopia].splice(9, 12).join('') //pega os 2 ultimos digitos do cpf e transforma em uma string
        let doisDigitosCalculado = ''
        
        for(let aux = 0; aux < 2; aux++) {
            aux == 0? cpfArrayCopia = cpfArrayCopia.splice(0, 9) : cpfArrayCopia.push(Number(this.cpfArray[this.cpfArray.length - 2]))
            let sequencia = cpfArrayCopia.length + 2

            let resultado = cpfArrayCopia.reduce((acumula, valor) => {
                sequencia--
                return acumula + (valor * sequencia )
            }, 0)

            resultado = (11 - (resultado % 11))
            if(resultado >= 10) resultado = 0   //se o digito for maior que 10, no cpf é considerado como 0

            doisDigitosCalculado += resultado
        }
        if(String(doisDigitosCalculado) == String(doisDigitosReal)) {
            this.cpf = inputCpf
            return true
        } else {
            this.cpf = ''
            return 'CPF inválido. \n'
        }
    }


    exibeUsuario () {
        return `nome: ${this.nome} \n  sobrenome: ${this.sobrenome} \n  cpf: ${this.cpf} \n  Usuário: ${this.usuario} \n  senha: ${this.senha}`
    }
} 