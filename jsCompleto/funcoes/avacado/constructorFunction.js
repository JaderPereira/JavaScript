//factory function       retorna  objeto
//constructor function   retorna  objeto
/*Uma função construtora é parecido com uma factory function que a gente aprendeu anteriormente só que tem algumas coisinhas diferentes, vou listar alguns fatos para o funcionamento da função construtora que é diferente da factory function:
1. Na factory function a gente nomeava funçoes usando o camelCase, começa a primeira palavra com letra minúscula e a segunda palavra tem sua inicial com letra maiúscula, em uma constructor function a gente coloca a primeira palavra da função com letra maiúscula.

2. na factory function a gente já começava com o primeiro passo após criar a função fazendo um 'return' que retornasse um objeto, na constructor function a gente não precisa disso.

2,1. Levando em consideração a afirmativa número 2, dentro da função nós referenciamos com o this o que a gente não quer deixar privado e 'público' para ser acessado na função

3. Na constructor function a gente pode deixar atributos privados dentro da nossa função para que eles não sejam acessados como um atributo de um objeto.

4. Quando a gente coloca a função construtora em uma variável a gente tem que colocar a palavra 'new' antes de chamar a função pra ela funcionar como uma função construtora.

*/
function Pessoa (nome, sobrenome) {
    //um atributo privado, ele não pode ser acessado fora do objeto, nem se eu usar .ID, ele ta privado e so pode ser usado aqui dentro
    const ID = 1984568765

    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = this.nome + ' ' + this.sobrenome

    this.metodo = () => {
        console.log(this.nomeCompleto, ': eu sou um método!')
    }
}

const p1 = new Pessoa('Jader', 'Pereira')
const p2 = new Pessoa('Gomes', 'Santos')

console.log(p1)
console.log(p2.sobrenome)
p2.metodo()