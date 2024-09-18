const divParagrafos = document.getElementById('paragrafos')
//o querySelectorAll vai pegar todos os elementos 'p' dentro da div com id de paragrafos que eu fiz no documento HTML
let paragrafos = divParagrafos.querySelectorAll('p')//nodeList, funciona mt simlar a um array

//o método "getComputedStyle" pega todos os estilos do documento selecionado, que no caso é o body. Por isso que na variável 'corFundoBody' nos pegamos a variável bodyStyle que tem todos os estilos do body e selecionamos apenas o backgroundcolor.
const bodyStyle = getComputedStyle(document.body)
const corFundoBody = bodyStyle.backgroundColor

for (let aux of paragrafos) {
    aux.style.backgroundColor = corFundoBody
    aux.style.color = 'white'
}