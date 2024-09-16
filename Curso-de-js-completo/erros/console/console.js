//Tu ja deve ter percebido que quando lançamos erros eles vem normais como qualquer texto em questão de formatação e cor, e alguns erros do navegador saem amarelos ou vermelhos, para isso temos comandos específicos, o console.warn e o console.error

let conta = 500
let salario = 490

try{
    if(salario < conta) throw new Error('ta negativo')
    console.log('deu pra pagar dboa')
} catch(e) {
    console.warn(e)   //deixa o erro amarelo
    console.error(e)  //deixa o erro vermelho
}