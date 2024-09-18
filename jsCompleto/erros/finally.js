//Suponha que estou usando uma biblioteca ou algum recurso já nativo do JS para acessar um arquivo de texto e fazer alguma modificação dentro dele e depois fechar.
/*
try {
    //parte do código que vai tentar ser executada, se não ouver erro, executa, se ouver erro para na linha do erro
    console.log('Abrindo o arquivo...')
    console.log('Fazendo alterações no arquivo...')
    console.log(a)
} catch(error) {
    //parte do código que só vai ser rodado se ocorrer um erro
    console.log('O arquivo deu pau!')
} finally {
    //parte do código que sempre vai ser rodada
    console.log('Fechando o arquivo...')
}
console.log('arquivo fechado!')
*/

function hora (data) {
    if(data && !(data instanceof Date)) { //instance of date checa se o valor é uma instancia da biblioteca date
        throw new TypeError('Data não é uma instancia de Date')
    }
    if(!data) {
        data = new Date(); //isso é uma instancia da biblioteca date
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    })
}
try {
    const horaAtual = hora()
    console.log(horaAtual)
} catch(error) {
    console.log('ERRO: o valor passado não é compatível.')
} finally {
    console.log('Fim do programa')
}