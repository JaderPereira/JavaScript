let tuneis = [
    [5, 6], // tunel: 1
    [2, 3], // tunel: 2
    [3, 4], // tunel: 3
    [4, 2], // tunel: 4
    [3, 5], // tunel: 5
    [1, 5], // tunel: 6
    [1, 2]  // tunel: 7
]
let sugestoes = 2
let s1 = checaSugestoes([5, 3, 4, 3, 2])
//let s2 = checaSugestoes([1, 2, 3, 5, 4, 2])

function checaSugestoes (sugestao) {
    for (let aux = 0; aux < sugestao.length; aux++) {
        let saloes = [sugestao[aux], sugestao[aux += 1]]
        //console.log(saloes) 
        //console.log(inverteTunel(tuneis[0]))
        
        for(let aux in tuneis) {
            if(saloes[1] != undefined) {
                let invertido = inverteTunel(tuneis[aux])
                let comparacaoNormal = (tuneis[aux][0] == saloes[0] && tuneis[aux][1] == saloes[1])
                let comparacaoIvertida = (invertido[0] == saloes[0] && invertido[1] == saloes[1])
                console.log(saloes)
                
                if (comparacaoNormal || comparacaoIvertida) {
                    console.log(saloes)
                    console.log(tuneis[aux], invertido)
                } else {
                    console.log('nao vai bro')
                }
            }
        }   
        
        aux--
    }
}

function inverteTunel (tunel) {
    return [tunel[1], tunel[0]]
}

//console.log(s1)