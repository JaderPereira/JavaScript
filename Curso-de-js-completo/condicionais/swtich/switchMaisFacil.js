/*
Dá pra ver que aqui o código fica desnecessariamente grande, que comparado ao outro já podemos decedir um vencedor.
function cafeina(tipo) {
    let result
    switch(tipo) {
        case 'redbull': 
            result = '147mg' 
            break
        case 'coffee': 
            result = '92mg'
            break
        case 'tea': 
            result = '11mg'
            break
        case 'soda': 
            result = '21mg'
            break
        default: 
            result = 'não encontrado'
    }
    return result
}
*/

function cafeina(tipo) {
    const tiposCafeina = {
        redbull: '147mg',
        coffee: '92mg',
        tea: '11mg',
        soda: '21mg'
    }
    return tiposCafeina[tipo] ? tiposCafeina[tipo] : 'Não encontrado'
}
console.log(cafeina('redbull'))