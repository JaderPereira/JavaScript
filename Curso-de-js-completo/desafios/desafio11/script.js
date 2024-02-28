let tarefa = document.querySelector('.texto')
let listaTarefa = document.querySelector('.listaTarefa')
let addTarefa = document.querySelector('.adicionarTarefa')

function criaLi () {
    const li = document.createElement('li')
    return li
}

function limpaInput () {
    tarefa.value = ''
    //O método focus vai fazer com que o input não seja desmarcado, assim podendo continuar escrevendo sem ter que clicar nele novamnete
    tarefa.focus()
}

function criaTarefa (textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    listaTarefa.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvaTarefa()
}

function criaBotaoApagar(li) {
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.innerText = 'Apagar'
    li.appendChild(botaoApagar)
}

tarefa.addEventListener('keypress', (tecla) => {
    if(tecla.keyCode === 13) {
        if(!tarefa.value) return
        criaTarefa(tarefa.value)
    }
})
document.addEventListener('click', (e) => {
    const elemento = e.target
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
    }
})

addTarefa.addEventListener('click', () => {
    if(!tarefa.value) return
    textoInput = tarefa.value
    criaTarefa(tarefa.value)
})

function salvaTarefa () {
    const liTarefas = document.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
}