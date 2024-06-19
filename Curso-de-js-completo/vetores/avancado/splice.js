//O splice é um método utilizado em arrays que pode fazer a função do: pop(), push(), shift(), unshift(). Saber utilizar o splice bem pode ser uma vantagem e tanto, ao inves de lembrar de como funcionam 4 métodos eu sei como funciona 1 que faz os 4, alem de que temos algumas funcionalidades que só o splice tem.

//O splice é um método que tem aproximadamente 3 parâmetros(esse aproximadamente é explicado no terceiro parâmetro). O primeiro parâmetro vai dizer o indice do array, o segundo vai dizer quantas vezes ele será deletado e o terceiro parâmetro vão ser os elementos que serão adicionados, podendo ser 1, mais de 1 ou nenhum.

//      array.splice(indice, delete, element1, element2, element3, element4, etc...)

//segue nos exemplos que talvez fique mais claro, eu vou explicar um de cada vez.

//pop
    const nomes = ['Jader', 'Paula', 'Asaf', 'Gal']
    nomes.splice(3, 1)
    //lendo com calma fica: do indice 3, eu quero deletar 1 elemento e não quero adicionar nenhum, porfavor, testa ai como funciona. Você não necessáriamente tem q tirar o ultimo elemento, você pode tirar o primeiro, o segundo, o terceiro, basta mudar o primeiro parâmetro(indice).  Caso você queira, também pode fazer isso mais de uma vez, testa colocar o primeiro parâmetro '1' e o segundo '2' e vê o que sai

    console.log(nomes)

//push
    nomes.splice(2, 0, 'Miguel')
    //neste caso eu estou mudando um pouco do intuito do push, lendo com calma esse splice fica: do indice 2, eu quero remover 0 elementos, ou seja, não muda nada no array e eu quero adicionar o elemento 'Miguel' no indice que eu dei. No array, no indice 2 teremos o elemento Miguel lá e todos os outros elementos afrente do 'Miguel' aumentam em 1 seu indice.

    nomes.splice(nomes.length, 0, 'Lopin')
    //esse splice aqui eu fiz mais pra ser identico ao push, lendo com calma esse splice fica: do ultimo indice do array, eu quero remover 0 elementos e quero adicionar o elemento 'Lopin' no indice que eu dei. Nesse caso do push pode ser mais vantajoso você usar o próprio push mesmo caso seja só um elemento, mas em caso de você precisar adicionar multiplos elementos vale mais a pena você usar o splice. 

    console.log(nomes)

//shift
    nomes.splice(0, 1)
    //bem simples, lendo esse splice com calma fica: do indice 0, eu quero remover 1 elemento e não quero adicionar nenhum elemento. É possivel tambem tirar vários elementos, só muda o numero do segundo parâmetro e checa.

    console.log(nomes)

    //unshift
    nomes.splice(0, 0, 'Marcos')
    //bem simples também, lendo isso com calma fica: do indice 0, eu quero remover 0 elementos e adicionar o elemento 'Marcos' no indice que eu dei. Coisa boa, vai testando as possibilidades de tudo.

    console.log(nomes)




//indices negativos
//todos os arrays tem seus indices em seus lugares que você ja sabe onde fica, agora o que você talvez não saiba é que temos indices negativos tambem nos arrays, veja exemplos abaixo:
/*              
indice invertido:       -6       -5       -4        -3        -2       -1
indice normal:           0        1        2         3         4        5
const carros =      ['Toyota', 'Honda', 'Audi', 'Chevrolet', 'jeep', 'Fiat']

O calculo pra você saber o indice invertido de um elemento é: indice - array.length
Por exemplo: o array carros tem um tamanho de 6 elementos, eu sei que o indice invertido do elemento audi é -4 porque 2 - 6 = -4. Tu pode usar isso ao teu favor, tipo:

carros.splice(-4, 2)
O splice acima está do indice -4 cortando 2 elementos, ou seja, ele está removendo os indices -4 e -3, que respectivamente são os elementos audi e chevrolet.
*/
