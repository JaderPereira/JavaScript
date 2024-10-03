const Cachorro = require('./Z/mod2')
console.log(Cachorro(2, 5))

console.log(__filename)  //mostra o caminho até o arquivo atual
console.log(__dirname)   //mostra o caminho até a pasta atual

const path = require('path')
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))

//O path faz uma parada daora, quando a gente fala path.resolve(como uma promise), e coloca o __dirname ele busca pra gente o local da pasta, certo isso o __dirname faz normalmente, a parada dele é que seus outros parâmetros podem fazer umas paradas legais, quando a gente coloca '..' a gente fala pra ele voltar uma pasta, e quando colocamos alguma palavra ele entende como uma pasta, se tu ver o console.log acima tu vai ver a diferença do caminho que foi mostado pelo path.resolve() e a diferença entre o caminho mostrado pelo __dirname, a gente mudou pelos parâmetros do path.resolve(), a gente falo: volta 2 pastas e vai na pasta arquivos e dps entra na pasta imagens(não que essas duas pastas existam, so servem de exemplo), mas ta ai.