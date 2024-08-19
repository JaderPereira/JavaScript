//Suponhamos que eu tenho um programa que tem diversos dados de usuários e que eu faço um requerimento desses dados e quero que eles cheguem em uma determinada ordem, por N motivos esses dados podem não vir na ordem que eu quero, para isso a gente usa a programação ao nosso favor para fazer essa organização. Como visto na seção de funções podemos fazer isso com funções callback(dá um pulinho lá no arquivo pra lembrar), mas esse não é o melhor jeito de fazer isso, para isso temos promises que vai nos ajudar nesse serviço

function aleatorio (min, max) {
    //função que cria um numero aleatório entre o maximo e o minimo passado no parâmetro
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msgm, tempo) {
    //aqui eu to usando um promise, o promise leva 2 parâmetros, o primeiro(resolve) vai dar continuidade a minha função e prosseguir com seu proposito, nessa situação eu quero pegar um dado de um banco de dados hipotetico, caso nenhum erro ocorra o resolve vai só indo, já o reject vai servir pra quando realmente algo der errado e abortará a continuidade do promise e vai exibir um erro
    return new Promise((resolve, reject) =>{
        if(typeof msgm !== 'string') reject('Bad value')

        setTimeout(() => {
            resolve(msgm)
        }, tempo);
    })
    
}

//Quando a gente vai chamar a função e fazer aquela porrada de função a gente usa um método chamado 'then()' que vai seguindo enquanto nenhum erro acontece, como tá ai abaixo, cada função ta dentro de um then, isso seria equivalente a quando você tem um callback e já chama a segunda função se o primeiro callback for verdadeiro.

//beleza, agora e se algo der errado? na linha 14 tem uma checagem se o parâmetro é uma string, caso não seja, ele solta um reject, esse reject vai fazer com que o programa esqueça todas as outras funções nos then's e pule para o catch que vai soltar um erro. Nesse caso o erro já tá ali pronto se tu quiser executar o código certinho sem erro é só tirar o número e colocar uma string normal

esperaAi('Acessando banco de dados...', aleatorio(1, 2))
.then(respota1 => {
    //respota1 é o primeiro parâmetro da linha 27
    console.log(respota1)
    return esperaAi('Buscando dados...', aleatorio(1, 2))
})
.then(respota2 => {
    //respota2 é o primeiro parâmetro da linha 31
    console.log(respota2)
    return esperaAi('Tratando dados...', aleatorio(1, 2))
})
.then(resposta3 => {
    //respota3 é o primeiro parâmetro da linha 36
    console.log(resposta3)
    return esperaAi(1, aleatorio(1, 2))
})
.then(resposta4 => {
    //respota4 é o primeiro parâmetro da linha 41
    console.log(resposta4)
})
.catch(erro => {
    console.log('Erro', erro)
})
//to quebrando a linha pra ficar facil de ler, se eu n quebrasse ia ficar assim:
//esperaAi('oi1', aleatorio(1, 3)).then(respota => { console.log(respota); return esperaAi('oi2', aleatorio(1, 3)) }) .then(respota => {console.log(respota)}).catch()