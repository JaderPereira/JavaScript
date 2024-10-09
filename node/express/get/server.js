const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express


app.post('/', (request, response) => {
    response.send('Recebi o formulário')
})

app.get('/', (requisicao, resposta) => {    
    resposta.send(`
        <form action="/" method="POST">
            nome do cliente: <input type="text" name="nome">
            <button>enviar</button>
        </form> 
    `)
})

app.get('/contato', (request, resonponse) => {
    resonponse.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
    console.log('acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})

/*
O express é uma maneira da gente rodar um servidor facilmente, se nao a gente ia ter q fazer a maior maracutaia pra rodar esse script simples, o que que rola, primeiro precisamos saber o que é CRUD, tu ja ouviu essa palavra agora se liga o que cada letra significa:
CRUD
    C - Create(post) 
    R - Read(get) 
    U - Update(put ou patch) 
    D - Delete(delete) 

Isso são operações que fazemos em um servidor, criar, ler, atualizar e deletar dados é fundamental para a criação do nosso sistema. Nesse script tu pode ver que eu fiz 2 get e 1 post, os 2 get foram so pra mostrar coisas na tela e o post foi para o envio de um formulário de 1 get. Vamo começar pelo get:
get
    O get é uma operação que le dados para nós, sempre quando fomos fazer uma operação get devemos colocar o primeiro parâmetro como o caminho para nosso servidor saber onde fazer a operações, no caso do primeiro get q foi feito eu mandei o caminho '/' que significa a raiz do sistema, como se fosse o indice de tudo, meu segundo parâmetro foi uma função que tem 2 parâmetros base, request e response, requesição e resposta, isso significa que sempre que o usuário for acessar algum site ele faz uma requesição e o servidor tem que conceder ao usuário uma resposta, por isso que dentro da função eu falo resposta.send() o send vai mostrar o que estiver dentro do parâmetro, nesse caso é um html simples de um formulário q serve só de exemplo.

listen
    Quando vamos fazer alguma operação em um servidor, temos diversas portas para passar por elas e fazer com que o servidor execute nosso script, nesse script eu usei a porta 3000 porque geralmente é uma porta que o servidor não usa, caso fosse uma porta que o servidor ja estava fazendo a requesição de algum recurso ou dado iria dar um erro, e esse método faz com que o servidor execute o nosso script, tanto que dentro da função eu coloquei 2 console.log, um pra eu acessar o link com facilidade e o outro avisando que o servidor está em execução.

Executando tudo
    Para executar esse script a gente pode executar da forma convencional que fazemos, ou apertando F8 ou apertando no botão de run da extensão code runner, a parada é que devemos ser responsaveis com isso porque o servidor vai continuar rodando até mandarmos ele parar, então um jeito melhor é abrirmos o terminal e digitarmos o seguinte comando:
        node server.js

    Nesse caso o server.js é esse arquivo que tem o script q eu quero executar, isso vai fazer o script rodar, para pararmos é so segurar CTRL e apretar a tecla 'c', pronto o servidor para e não temos mais problemas.
 




 */