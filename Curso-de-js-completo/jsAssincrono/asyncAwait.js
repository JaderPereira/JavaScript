// Async e Await
// no arquivo que explica como funciona o promise, tem o uso do promise com o then e o catch tranquilinho. Essa funcionalidade do async e await deixa o promise mais limpo, se liga 

function aleatorio (min = 0, max = 3) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function sequencia(msgm, tempo) {
    return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            if(typeof msgm !== 'string') {
                reject('Bad value')
                return
            }
            resolve(msgm)
        }, tempo);
    })
    
}

async function executa () {
    try{
        const fase1 = await sequencia('fase1', aleatorio())
        console.log(fase1)

        const fase2 = await sequencia('fase2', aleatorio())
        console.log(fase2)

        const fase3 = await sequencia('fase3', aleatorio())
        console.log(fase3)
        console.log('Acabou as promesas, a ultima foi: ' , fase3)
        
    } catch(erro) {
        console.log(erro)
    }
}
executa()




/* jeito meio complicado
sequencia('fase1', aleatorio())
    .then(valor => {
        console.log(valor)
        return sequencia('fase2', aleatorio())
    })
    .then(valor => {
        console.log(valor)
        return sequencia('fase3', aleatorio())
    })
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => console.log(erro))
*/