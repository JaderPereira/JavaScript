let inputNome  
let inputSobrenome
let inputCpf
let inputUsuario 
let inputSenha 
let inputConfereSenha
let campos = document.querySelectorAll('.campo')



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
        Object.defineProperty(this, 'nome',      {  enumerable: true, configurable: true, writable: true, value: nome       })
        Object.defineProperty(this, 'sobrenome', {  enumerable: true, configurable: true, writable: true, value: sobrenome  })
        Object.defineProperty(this, 'cpf',       {  enumerable: true, configurable: true, writable: true, value: cpf        })
        Object.defineProperty(this, 'usuario',   {  enumerable: true, configurable: true, writable: true, value: usuario    })
        Object.defineProperty(this, 'senha',     {  enumerable: true, configurable: true, writable: true, value: senha      })
    }

    checaTudo() {
        let erros = ''
        this.checaCPF()
        this.checaSenha()
        this.checaSobrenome()
        this.checaUsuario()
        if(this.checaNome() === true && this.checaCPF() === true && this.checaSenha() === true && this.checaSobrenome() === true && this.checaUsuario() === true) {
            return 'Cadastro concluido'
        } else {
            
            console.log(this.exibeUsuario())
            return erros
        }

    }
    
    checaNome() {
        if(this.nome === '') {
            this.nome = ''
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'O campo nome não está preenchido corretamente. \n'
            campos[0].appendChild(errosTipo)
            return false
        }
        this.nome = inputNome
        return true
    }
    checaSobrenome() {
        if(this.sobrenome === '') {
            this.sobrenome = ''
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'O campo sobrenome não está preenchido corretamente. \n'
            campos[1].appendChild(errosTipo)
            return false
        }
        this.sobrenome = inputSobrenome
        return true
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
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'O campo CPF está vazio \n'
            campos[2].appendChild(errosTipo)
            return false
        }
        if(this.cpfLimpo === '') {
            this.cpf = ''
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'O CPF deve conter apenas números. \n'
            campos[2].appendChild(errosTipo)
            return false
        }
        if(this.cpfLimpo.length !== 11) { 
            this.cpf = ''
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'O CPF não tem 11 números \n'
            campos[2].appendChild(errosTipo)
            return false
        }
        if(this.sequenciaCPF()) { 
            this.cpf = ''
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'CPF inválido \n'
            campos[2].appendChild(errosTipo)
            return false
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
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'O campo CPF está vazio \n'
            campos[2].appendChild(errosTipo)
            return false
        }
    }

    checaUsuario() {
        if(this.usuario === '') {
            this.usuario = ''
            let errosTipo = document.createElement('p')
            errosTipo.textContent = 'O campo usuário não está preenchido corretamente. \n'
            campos[3].appendChild(errosTipo)
            return false
        } else {
            this.usuario = inputUsuario
            return true
        }
    }

    checaSenha() {
        if(this.senha !== '' && (this.senha.length >= 8 && this.senha.length <= 16)) {
            if(this.senha !== inputConfereSenha) {
                this.senha = ''
                let errosTipo = document.createElement('p')
                errosTipo.textContent = 'As senhas não se correspondem. \n'
                campos[4].appendChild(errosTipo)
                return 
            }
            this.senha = inputSenha
            return true
        }
        this.senha = ''
        let errosTipo = document.createElement('p')
        errosTipo.textContent = 'O campo Senha deve ter pelo menos 8 caracteres e menos que 17. \n'
        campos[4].appendChild(errosTipo)
        return false
    }



    exibeUsuario () {
        return `nome: ${this.nome} \n  sobrenome: ${this.sobrenome} \n  cpf: ${this.cpf} \n  Usuário: ${this.usuario} \n  senha: ${this.senha}`
    }
} 