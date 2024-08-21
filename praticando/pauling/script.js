let botao = document.querySelector('#botao')
let resultado = document.querySelector('.resultado')

// ordem eletronica: 1s2, 2s2, 2p6, 3s2, 3p6, 4s2, 3d10, 4p6, 5s2, 4d10, 5p6, 6s2, 4f14, 5d10, 6p6, 7s2, 5f14, 6d10, 7p6


function calcula() {
    class distribuicaoEletronica {
        constructor() {
            this.eletrons = Number(document.querySelector('#eletrons').value)
        }
    
        distribuiEletrons() {

            let ordem = {
                camadaK: [2],
                camadaL: [2, 6],
                camadaM: [2, 6, 10],
                camadaN: [2, 6, 10, 14],
                camadaO: [2, 6, 10, 14],
                camadaP: [2, 6, 10],
                camadaQ: [2, 6]
            }
            
            
            let estadoAtual = 'Valor inválido'     //descreve o estado 
            //vão ser 8 linhas que eu vou checar, ou seja, 8 then
            let linhas = {
                linha1: [ordem.camadaK[0]],                                                         // 1s2
                linha2: [ordem.camadaL[0]],                                                         // 2s2
                linha3: [ordem.camadaL[1], ordem.camadaM[0]],                                       // 2p6,  3s2
                linha4: [ordem.camadaM[1], ordem.camadaN[0]],                                       // 3p6,  4s2
                linha5: [ordem.camadaM[2], ordem.camadaN[1], ordem.camadaO[0]],                     // 3d10, 4p6, 5s2
                linha6: [ordem.camadaN[2], ordem.camadaO[1], ordem.camadaP[0]],                     // 4d10, 5p6, 6s2
                linha7: [ordem.camadaN[3], ordem.camadaO[2], ordem.camadaP[1], ordem.camadaQ[0]],   // 4f14, 5d10, 6p6, 7s2
                linha8: [ordem.camadaO[3], ordem.camadaP[2], ordem.camadaQ[1]],                     // 5f14, 6d10, 7p6
            }

            
            
            for(let aux = 0; aux < 14; aux++) {
                if(this.eletrons <= 0) break
                if(this.eletrons >= linhas.linha2[aux]) {
                    this.eletrons -= linhas.linha2[aux]
                    estadoAtual = 'Camada: K, subnivel de diferenciação: 1s2'
                } else {
                    for(let aux = 0; aux < linhas.linha2[0]; aux++) {
                        if(this.eletrons == 0) break
                        this.eletrons -= 1
                        estadoAtual = `Camada: K, subnivel: 1s${aux + 1}`
                    }
                }
            }
            
            for(let aux = 0; aux < 14; aux++) {
                if(this.eletrons <= 0) break
                if(this.eletrons >= linhas.linha1[aux]) {
                    this.eletrons -= linhas.linha1[aux]
                    
                    estadoAtual = 'Camada: L, subnivel de diferenciação: 2s2'
                } else {
                    for(let aux = 0; aux < linhas.linha1[0]; aux++) {
                        if(this.eletrons == 0) break
                        this.eletrons -= 1
                        estadoAtual = `Camada: K, subnivel: 2s${aux + 1}`
                    }
                }
            }

            for(let aux = 0; aux < 14; aux++) {
                if(this.eletrons <= 0) break
                console.log(this.eletrons)
                if(this.eletrons >= linhas.linha1[aux]) {
                    this.eletrons -= linhas.linha1[aux]
                    estadoAtual = 'Camada: L, subnivel de diferenciação: 2s2'
                } else {
                    for(let aux = 0; aux < linhas.linha1[0]; aux++) {
                        if(this.eletrons == 0) break
                        this.eletrons -= 1
                        estadoAtual = `Camada: K, subnivel: 2s${aux + 1}`
                    }
                }
            }

        
            return estadoAtual
        }

    }
        
        
        
        
    let eletro1 = new distribuicaoEletronica()
    resultado.innerHTML = eletro1.distribuiEletrons()
}
