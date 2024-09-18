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
    //keycode vai testar o número da tecla que está sendo apertada, o 13 simboliza a tecla ENTER
    if(tecla.keyCode === 13) {
        if(!tarefa.value) return
        criaTarefa(tarefa.value)
    }
})
document.addEventListener('click', (e) => {
    const elemento = e.target
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
        salvaTarefa()
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
        //trim() tira os espaço desnecessários da string
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionarTarefaSalva () {
    let tarefa = localStorage.getItem('tarefas')
                            //parse vai transformar um JSON para sua forma em JS, seja um array, objeto, variável e etc.
    let listaDeTarefas = JSON.parse(tarefa)
    console.log(listaDeTarefas)
    for(let aux in listaDeTarefas) {
        criaTarefa(listaDeTarefas[aux])
    }
}
adicionarTarefaSalva()