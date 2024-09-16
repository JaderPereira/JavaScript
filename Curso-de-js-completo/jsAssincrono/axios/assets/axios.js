//fetch('pessoas.json')
//    .then(resposta => resposta.json())
//    .then(json => carregaElementosJson(json))

axios('pessoas.json')
    .then(resposta => carregaElementosJson(resposta.data))


function carregaElementosJson(json) {
    const table = document.createElement('table')
    document.querySelector('.maior').append(table)  //coloca a table criada na linha de cima como filho da seção maior

    const thead = document.createElement('thead')
    table.append(thead)

    const tr = document.createElement('tr')
    thead.append(tr)

    const cabecalhos = ['nome', 'email', 'salario', 'estado', 'empresa', 'idade', 'sexo', 'cpf']
    for(let cabecalho of cabecalhos) {
        const th = document.createElement('th')     //cria o elemento th 
        th.classList.add('dadoCabecalho')           //adiciona uma class no elemento th
        th.innerText = cabecalho                    //adiciona texto ao elemento th de acordo com a iteração do array 'cabecalhos'

        tr.append(th)                               //adiciona o elemnto 'th' como filho do elemento 'tr'
    }

    const tbody = document.createElement('tbody')   //cria o body da tabela
    table.append(tbody)                             //adiciona o body da tabela na tabela

    for(let pessoa of json) {                       //for para criar todas as linhas da tabela
        const tr = document.createElement('tr')     //₢ria a linha

        for (let dado of cabecalhos) {              //for para criar cada dado da tabela
            const td = document.createElement('td') //cria o dado da tabela
            td.innerText = pessoa[dado]             //dá um valor ao dado da tabela

            tr.append(td)                           //adiciona o dado na linha
        }

        tbody.append(tr)                            //adiciona a linha na tabela já com todos os dados
    }
}

