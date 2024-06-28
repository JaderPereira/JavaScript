//to explicando vários métodos que dá pra usar nas strings tlgd, se tu rodar o código todo pode ficar meio dificil de ler e saber qual linha tá a sua resposta, pra isso faz assim: tu vai selecionar a linha que o método ta sendo usado e vai rodar ela, assim o código te retorna apenas aquela q tu selecionou e tu consegue ficar mais organizado(dá pra fazer com várias linhas tbm)

console.log('Jader Pereira Santos Gomes'.length)                                         //diz o tamanho da string
console.log('Jader Pereira Santos Gomes'.charAt(4))                                      //busca o caracter pela sua posição de objeto
console.log('Jader Pereira Santos Gomes'.indexOf('G'))                                   //busca a posição do caracter dentro do parentese pela posição do objeto
console.log('Jader Pereira Santos Gomes'.indexOf('e', 5))                                //busca a posição do caracter depois do indice 5
console.log('Jader Pereira Santos Gomes'.replace('Pereira Santos Gomes', 'Pereira'))     //o primeiro valor vai ser buscado e trocado pelo segundo
console.log('Jader Pereira Santos Gomes'.substring(6, 13))                               //pega uma parte entre os numeros dados pela posição do objeto
console.log('Jader Pereira Santos Gomes'.toUpperCase())                                  //deixa tudo em maiusculo
console.log('Jader Pereira Santos Gomes'.toLowerCase())                                  //deixa tudo em minusculo
console.log('Jader Pereira Santos Gomes'.endsWith('s'))                                  //checa se a ultima letra da strig é igual a do parâmetro, retorna boolean

let nome = 'Jader Pereira Santos Gomes'

console.log(nome.concat(' tem 16 anos'))                        //faz uma concatenação com o que estiver dentro do parenteses
console.log(nome + ' tem 16 anos')                              //mesma coisa que o primeiro so que com o '+'
console.log(`${nome} tem 16 anos`)                              //(maneira recomendada) ${nomeVariavel} pode ser colocado dentro de acento agudo e mostrar a variavel
