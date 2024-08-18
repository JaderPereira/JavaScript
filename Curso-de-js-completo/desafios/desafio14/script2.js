class ValidaFormulario{
    constructor() {
        this.formulario = document.querySelector('#formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.hendleSubmit(e)
        })
    }
    hendleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.validFields()
        const senhasValidas = this.validPassword()

        console.log(camposValidos, senhasValidas)
        if(camposValidos && senhasValidas) {
            alert('formulario enviado')
            this.formulario.submit()
        }
    }

    validPassword() {
        let valido = true

        let senha = this.formulario.querySelector('.senha')
        let confereSenha = this.formulario.querySelector('.confereSenha')

        if(senha.value !== confereSenha.value) {
            this.criaErro(senha, 'As senhas não se correspondem')
            this.criaErro(confereSenha, 'As senhas não se correspondem')
            valido = false
        }

        if(senha.length < 6 || senha.length > 12) {
            this.criaErro(senha, 'A senha deve ter entre 6 e 12 caracteres.')
            valido = false
        }

        return valido
    }

    validFields() {
        let valido = true

        for(let erroText of this.formulario.querySelectorAll('.msgmErro')) {
            erroText.remove()
        }

        for(let campo  of this.formulario.querySelectorAll('.input')){
            const label = campo.previousElementSibling.innerHTML.toLocaleLowerCase()  //pega o irmão de cima do elemento, no caso de todos os inputs são seus label's
            if(!campo.value) {
                this.criaErro(campo,`Campo ${label} não pode estar em branco`)
                valido = false
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valido = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valido = false
            }
        }
        return valido
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'O campo Usuário deve ter entre 3 e 12 caracteres.')
            valid = false
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'O campo Usuário deve ter letras e/ou números.')
            valid = false
        }

        return valid
    }

    validaCPF (campo) {
        const cpf = new CPF(campo.value)
        
        if(!cpf.validaCPF()) {
            this.criaErro(campo, 'CPF inválido')
            return false
        }
        return true
    }

    criaErro(campo, msgm) {
        const div = document.createElement('div')
        div.innerHTML = msgm
        div.classList.add('msgmErro')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()