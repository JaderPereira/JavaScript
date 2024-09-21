const path = require('path')    //communJS

module.exports = {
    //vai deixar nosso código legivel para desenvolvedores, sem essa opção o código ia ficar em uma linha só todo estranho
    mode: 'development',    

    //arquivo de entrada                         
    entry: './src/index.js',

    //configurações do arquivo de saida
    output: {
        //path é a localização do arquivo
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        
        //filename é o nome do arquivo
        filename: 'bundle.js'
    },
    //module é o modulo
    module: {
        //regras do modulo
        rules: [{
            //não vai ler a pasta node_modules porque não é importante e so iria tirar performance do código
            exclude: /node_modules/,

            //especificando que devem ser testados arquivos que tem .js no final
            test: /\.js$/,

            //o que ele vai usar
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
}