const fs = require('fs').promises
const path = require('path')


module.exports = (caminhoArquivo, mediaSubstituta, config) =>  {
    fs.writeFile(caminhoArquivo, mediaSubstituta, config)
}

