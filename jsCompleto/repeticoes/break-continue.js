let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let number of numbers) {
    if(number === 2) {
        continue
        //quando o código roda a linha do 'continue' ele vai pular tudo que estiver abaixo dele e iterar novamente, se tu perceber o 2 foi pulado porque o console.log que mostraria o 2 foi pulado pelo continue.
    }
    
    if(number === 7) {
        break
        //sai da repetição, quando o código roda o break ele vai pra fora da chave e continua o código
    }
    console.log(number)
}

