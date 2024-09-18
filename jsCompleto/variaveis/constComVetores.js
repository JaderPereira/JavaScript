const numeros = [56, 562, 1, 39, 13]

//como sabemos constantes são variaveis que não podem ser alteradas, mas quando utilizamos vetores a situação é diferente

numeros[3] = 4
//podemos alterar um valor que esta dentro do vetor sem erro
console.log(numeros)                                                       //o valor do indice 3 se alterou mesmo sendo um vetor constante

numeros = [34, 91, 13]
//quando fazemos uma atribuição direta em um vetor teremos um erro como retorno, ou seja, em um vetor constante você pode alterar o valor pelo indice mas não pode reatribuir um valor diretamente pois dá erro.
console.log(numeros)

//esta mesma regra se aplica aos objetos também.