let s = 0 , p = 0 , d = 0 , f = 0

let camadas = [2, 8, 18, 32, 32, 18, 8]

function diagramaPauling(eletro) {
    s = 0 , p = 0 , d = 0 , f = 0  //zera geral
    calculaS()      
}

function calculaS() {
    for(let aux = 0; aux < eletro; eletro--) {
        if(s < 2) s++
        if(s == 2) {
            calculaP()
        }
    } 
}
function a() {
    while(camadas[0] == 0) {
        
        eletro--
    }
}

function calculaP() {
    
}

diagramaPauling(1)