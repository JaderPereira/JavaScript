var fs = document.getElementById('fisico')
var ag = document.getElementById('agilidade')
var int = document.getElementById('inteligencia')
var cr = document.getElementById('coragem')
var pontos = document.getElementById('pontos-atributo')

var vid = document.getElementById('pt-vida')
var ant = document.getElementById('antecedentes')
var ini = document.getElementById('iniciativa')
var ac = document.getElementById('acoes')

var perso = {
    vida: 6,
    defesa: 5,
    antecedentes: 4,
    iniciativa: 0, 
    acoes: 1,
    atributo: 4,
}

fs.addEventListener('click', forca)
ag.addEventListener('click', agilidade)
int.addEventListener('click', inteligencia)
cr.addEventListener('click', coragem)


    function forca(){
        if (perso.atributo>0) {
            perso.vida += 5 
            perso.atributo -= 1
            vid.innerHTML = `${perso.vida} pontos de vida`
            pontos.innerHTML = `${perso.atributo}`
            
        } else if (perso.atributo<=0) {
            pontos.innerHTML = `${perso.atributo}`
        }
    }
  
    function agilidade(){
        if (perso.atributo>0) {
            perso.acoes += 1
            perso.atributo -= 1
            pontos.innerHTML = `${perso.atributo}`
            ac.innerHTML = `${perso.acoes} ações em combate`

        } else if (perso.atributo<=0) {
            pontos.innerHTML = `${perso.atributo}`
        }
    }

    function inteligencia(){ 
        if (perso.atributo>0) {
            perso.antecedentes += 1
            perso.atributo -= 1
            pontos.innerHTML = `${perso.atributo}`
            ant.innerHTML = `${perso.antecedentes} pontos em antecedentes`
  
        } else if (perso.atributo==0) {
            pontos.innerHTML = `${perso.atributo}`
        }
    }
 
    function coragem(){
        if (perso.atributo>0) {
            perso.iniciativa += 1
            perso.atributo -= 1
            pontos.innerHTML = `${perso.atributo}`
            ini.innerHTML = `${perso.iniciativa} de inicativa`

        } else if (perso.atributo<=0) {
            pontos.innerHTML = `${perso.atributo}`
        }
    } 

    