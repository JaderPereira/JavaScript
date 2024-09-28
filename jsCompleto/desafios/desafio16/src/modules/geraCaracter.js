export default function geraCaracter(tipo) {
    if (tipo == 'maiuscula') {
        const caracter = geraMaiusculo()
        return caracter
    } else if (tipo == 'minuscula') {
        const caracter = geraMinusculo() 
        return caracter
    } else if (tipo == 'numero') {
        const caracter = tipo == 'numero'? geraNumero():'' 
        return  caracter
    } else if (tipo == 'simbolo') {
        const caracter = tipo == 'simbolo'? geraSimbolo():'' 
        return caracter
    }

    function geraMaiusculo() {
        let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map(letra => letra.toUpperCase()) 
        let aleatorio = parseInt(Math.random() * alfabeto.length)
        return alfabeto[aleatorio]
    }
    function geraMinusculo() {
        const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        const aleatorio = parseInt(Math.random() * alfabeto.length)
        return alfabeto[aleatorio]
    }
    function geraNumero() {
        const numero = parseInt(Math.random() * 10)
        return numero

    }
    function geraSimbolo() {
        const simbolos = ['!', '@', '#', '$', '%', '¨', '&', '*']
        const aleatorio = parseInt(Math.random() * simbolos.length)
        return simbolos[aleatorio]
    }
}
