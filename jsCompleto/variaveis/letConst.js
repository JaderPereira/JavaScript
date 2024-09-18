let numero1 = 10
var numero2 = 10
const numero3 = 10
//o const(constante) é um tipo de variável que não pode ser alterada(tire a linha debaixo do comentário para verificar o erro)

//const numero3 = 30

//escopo

//teste de escopo do var
var Var = 20
console.log(Var)
{
    var Var = 10
    console.log(Var)
}

//Teste de escopo do let
let Let = 20
console.log("Let no escopo global:",Let)
{
    let Let = 10
    console.log("Let no escopo local(é uma variável diferente do global):",Let)
}
console.log("Valor da variável Let:",Let)
console.log("Podemos perceber que o valor que está aqui é o da variável Let de escopo global e não do local porque aquela variável so pode ser acionada lá")

//Teste de escopo do const
const Const = 20
console.log("valor da variável Const no escopo global:",Const)
{ 
    const Const = 10
    console.log("Valor da variável Const no escopo local(são diferentes q nem o let)",Const)
}
console.log("valor da variáveL Const:",Const,"A mesma do escopo global, é a mesma coisa que o let so que o const não pode ter seu valor alterado")

/*conclusão:
    Podemos concluir que alguns tipos de variáveis se comportam de maneiras diferentes em diferentes escopos, os tipos de variáveis que sofrem com o escopo são:

    var     ---->    false
    let     ---->    true
    const   ---->    true

    podemos concluir que as variáveis que mudam de valor são:

    var     ---->    true
    let     ---->    true
    const   ---->    false

    Levando isso em conclusão o var virou uma má prática, tente usar o let na maioria das vezes, se ver que precisa usar o var, não tenha medo.
    Vale ressaltar que o var tem uma peculiaridade que ele pode ter a sua palavra "var" omitida como no exemplo abaixo, n é lá grandes coisas mas agora você sabe

*/
{
    jader = "oi"
    console.log(jader)
}
console.log(jader)  //ver que a variável funcionou aqui nos leva a certeza que ela é uma variável do tipo var porque apenas o let pode funcionar sem escopo.