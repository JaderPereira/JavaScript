const fizzBuzz = (num) => {
    if (Number.isInteger(num)) {
        
        if (num % 3 == 0 && num % 5 == 0) return 'FizzBuzz'
        else if (num % 3 == 0) return 'Fizz'
        else if (num % 5 == 0) return 'Buzz'
        else return num

    } else {
        return num
    }
}

for(let aux = 0 ; aux <= 100 ; aux++) {
    console.log('Índice', aux ,':', fizzBuzz(aux))
}