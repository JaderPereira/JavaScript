const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express

app.use(express.urlencoded({extended: true}))

app.post('/', (request, response) => {
    console.log(request.body)
    response.send(`o que me foi enviado foi: ${request.body.nome}`)
})

app.get('/', (requisicao, resposta) => {    
    resposta.send(`
        <form action="/" method="POST">
            nome do cliente: <input type="text" name="nome">
            <button>enviar</button>
        </form> 
    `)
})

app.get('/testes/:idUsuario?/:outraCoisa?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.listen(3000, () => {
    console.log('acessar: http://localhost:3000')
})

/*
Imagine que você é um usuário do facebook e abre seu perfil para dar uma olhada nele e ve a sua url, algo parecido com:
    http://facebook.com/profile/983747324

facebook.com voce sabe o que é, "profile" você tambem sabe o que é mas essa porrada de numero pode ser algo curioso, isso é um parâmetro que o servidor implementa na url do projeto, os desenvolvedores do facebook não podem criar uma pagina html pra cada usuário, para isso eles colocam identificadores, na maioria das vezes representados por numeros que fazem o papel de te identificar, por isso que provavelmente quando a url vai para:
    http://facebook.com/profile/983747324

ela está procurando um perfil com aquele id. beleza agora que deu pra entender a teoria vou mostrar as praticas.
Para fazermos um get com parâmetros a gente a mesma coisa que ia fazer sem parâmetros, app.get('/testes', (req, res) => {}), agora a gente pode colocar parâmtros nas coisas, para isso vamos mudar o primeiro parâmetro do nosso get, o caminho.
Quando queremos adcionar um parâmetro novo a gente coloca:
    app.get('/testes/:idUsuario', (req, res) => {
        console.log(req.params)    
    })

Os dois pontos indicam que o idUsuario é um parâmetro e dentro da nossa função a gente da console.log() em uma parada, que são os parâmetros que estão sendo enviados, agora vamos fazer isso na mão, abre o localhost e tudo mais e coloca na url o '/testes/qualquercoisa' isso faz com que seja mostrado no console a seguinte parada: {"idUsuario":"qualquercoisa"}, exatamente, um json com as informações do parâmetro,o req.params serve pra isso, mostrar os parâmetros.

Beleza aprendemos a mostrar os parâmetros e tudo mais mas temos um problema, quando tentamos abrir o /testes ele não consegue fazer esse get porque no get que fizemos acima nós fizemos ele pedindo o parâmetro, para deixar o parâmetro opcional a gente coloca uma interrogação depois dele o que indica que aquele parâmetro é opcional. dessa forma:
    app.get('/testes/:idUsuario?', (req, res) => {
        console.log(req.params)    
    })

Agora vamos ver como podemos colocar mais de um parâmetro, pode ser que alem do id do usuario eu tenha outro parâmetro para pegar, para isso a gente coloca '/:' a barra pra indicar uma nova rota e o dois pontos para indicar um parâmetro, dessa forma:
     app.get('/testes/:idUsuario?/:outraCoisa?', (req, res) => {
        console.log(req.params)    
    })
*/

/*
Agora vamos falar sobre as query Strings, você ja estudou isso em formulários html de que quando fazemos um metodo get para um formulário simples todas as informações que foram enviada nesse formulário ficam na url, aparece assim:
    https://meusite.com.br/?nome=jader&senha=123&idade=17

Todas as informações que foram enviadas estão la na minha url, o que a gente consegue pegar aqui pelo express, para isso a gente fala req.query que teremos outro json com todas as query string que foram enviadas, testa isso ai no /testes e coloca uma query string dps pra tu da uma olhada. Então para fazer uma query string a gente coloca depois da rota ?chave1=valor1&chave2=valor2 e mais quantas chaves e valores eu quiser.

*/

/*
Agora bora falar de uma parada legal, quando a gente envia alguma coisa em um formulário a gente tem que tratar essa coisa, ou seja, quando a gente envia algo a gente faz faz um get para depois fazer um post e receber os valores e tratar eles, a gente ja viu como funciona o get e como fazer um post a partir desse get, agora a gente vai falar sobre o "req.body", esse objeto vai conter todos os valores que foram enviados de um get para um post, se tu observar o código acima a gente tem 1 unico post para o unico formulário que só pega o nome do usuario, bem simples(detelhe: esse formulário tem que ter o método "post"). Para acessar esses dados enviados a gente vai dentro do post da um console.log() só pra ver como q fica, pra isso a gente vai chamar o req.body, mas ai tem um problema, o express por padrão não envia esses valores por padrão, para isso a gente coloca apenas uma linha de comando:
    app.use(express.urlencoded({extended: true}))

Depois de colocar essa linha do lado do post a gente pode ver e manipular nossos dados enviados do nosso formulário, como está sendo feito, e outra parada, quando a gente criou o input do formulário a gente colocou um name="" nele, esse name sempre foi ignorado porque ele serve pra essa hora, quando a gente ta mexendo com servidor, tanto que eu fiz um send com o req.body.nome e esse nome não surgiu do nada, ele veio porque esse é um atributo do nosso input.
 */