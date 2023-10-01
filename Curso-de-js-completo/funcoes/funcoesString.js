console.log('Jader Pereira Santos Gomes'.length)                                         //diz o tamanho da string
console.log('Jader Pereira Santos Gomes'.charAt(4))                                      //busca o caracter pela sua posição de objeto
console.log('Jader Pereira Santos Gomes'.indexOf('G'))                                   //busca a posição do caracter dentro do parentese pela posição do objeto
console.log('Jader Pereira Santos Gomes'.indexOf('e', 5))                                //busca a posição do caracter depois do indice 5
console.log('Jader Pereira Santos Gomes'.replace('Pereira Santos Gomes', 'Pereira'))     //o primeiro valor vai ser buscado e trocado pelo segundo
console.log('Jader Pereira Santos Gomes'.substring(6, 13))                               //pega uma parte entre os numeros dados pela posição do objeto
console.log('Jader Pereira Santos Gomes'.toUpperCase())                                  //deixa tudo em maiusculo
console.log('Jader Pereira Santos Gomes'.toLowerCase())                                  //deixa tudo em minusculo

let nome = 'Jader Pereira Santos Gomes'

console.log(nome.concat(' tem 16 anos'))                        //faz uma concatenação com o que estiver dentro do parenteses
console.log(nome + ' tem 16 anos')                              //mesma coisa que o primeiro so que com o '+'
console.log(`${nome} tem 16 anos`)                              //(maneira recomendada) ${nomeVariavel} pode ser colocado dentro de acento agudo e monstr a variavel
