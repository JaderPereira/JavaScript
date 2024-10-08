const path = require('path')                                    //biblioteca 'path' que serve para pegar caminhos absolutos de arquivos
const caminhoArquivo = path.resolve(__dirname, 'teste.json')    //caminho que gerei com a bilbioteca 'path'
const escreve = require('./modules/escreve')                    //importação da função escreve que escreve arquivos
const le = require('./modules/le')                              //importação da função le que le arquivos

const pessoas = [       //array com varios objetos que vou tranformar em json, escrever em um arquivo e dps voltar para objeto JS e dar console.log nele
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Matheus'},
    {nome: 'Pedro'},
    {nome: 'Luisa'},
]

const pessoasJSON = JSON.stringify(pessoas, '', 2)      //processo de transformação do array em json
escreve(caminhoArquivo, pessoasJSON, { flag: 'w'} )     //processo de escrever o json q foi gerado acima

async function leArquivo (caminho) {                    //função que le o arquivo
    const dados = await le(caminho)                     //leu o arquivo
    renderizaDados(dados)                               //enviou ele pra função que vai transformar o json em objeto
}

function renderizaDados(dados) {                        //função que transforma o json em objeto
    const objeto = JSON.parse(dados)                    //transforma json em objeto
    objeto.forEach(pessoa => console.log(pessoa));      //mostra os objetos dentro do array
}

const teste = leArquivo(caminhoArquivo).then(dados => console.log(dados))

/*
Aprendendo a escrever arquivos com a biblioteca fileSystem, nas primeiras linhas a gente pega as bibliotecas fs e path para podermos trabalhar direitinho, fs é a biblioteca que le, escreve, mostra arquivos e tudo mais e path vai ajudar a gente a enviar o caminho certo para qual o arquvio será criado.

Na terceira linha eu criei uma variável chamada caminhoArquivo que contem o caminho que eu quero que o arquivo seja criado, dentro dos parâmetros eu coloco um __dirname que representa o local atual e um '..' que indica para voltar uma pasta, por fim eu coloco o nome do arquivo que pode existir ou nao existir, se não existir o fs vai criar ele.

mais abaixo eu faço o comando que escreve alguma coisa dentro do arquivo, fs.writeFile(), seu primeiro parâmetro é o caminho do arquivo que será escrito, o segundo parêmtro é o que será escrito e o terceiro é um objeto com algumas configurações, por exemplo o flag que até agora aprendi 2 configurações:
    { flag: 'w' }     //apaga tudo que tiver no arquivo e escreve o que tiver no segundo parâmetro
    { flag: 'a' }     //escreve tudo que estiver no segundo parâmetro junto com o que já estava escrito
*/