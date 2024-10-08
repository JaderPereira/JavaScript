const fs = require('fs').promises   
//fs quer dizer file system, uma biblioteca do node que permite a manipulação de arquivos
const path = require('path')

async function readdir(rootDir = path.resolve(__dirname)) {
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath)

        if(/\.git/g.test(fileFullPath)) continue
        if(/node_modules/g.test(fileFullPath)) continue
        
        if(stats.isDirectory()) {
            readdir(fileFullPath)
            continue            
        }
        if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue
        console.log(fileFullPath)

    }
}
readdir('C:/Users/Remakker/Documents/GitHub/JavaScript/')

//fs.readdir(caminho) vai fazer um array de todos os arquivos que estiverem no caminho, aqui embaixo o caminho é o caminho local q estamos ent mostra o index.js e um arquivo do node q fica oculto que serve pra melhor execução do js
/*
fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e))
*/