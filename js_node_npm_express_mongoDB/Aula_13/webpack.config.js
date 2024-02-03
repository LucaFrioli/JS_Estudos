const path = require('path');

module.exports = {
    //configurando web pack
    mode: 'development',//modo de development(desenvolvimento) mantém o código como ele realmente está já o modo production(produção) é mais prático
    entry: path.resolve(__dirname, 'frontend', 'main.js'),//arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [//cria as regras de converção de códigos
            //regras de javascript
            {
                exclude: /node_modules/,//arquivos e diretórios que não deverão ser analizados pelo webpack
                test: /\.js$/, // averigua se as extenções dos arquivos é js
                use: {
                    loader: 'babel-loader',// qual pacote será usado para carregar o código
                    options: {
                        presets: ['@babel/env']// em qual opção ele será carregado
                    }
                }
            },
            //regras do css
            {
                test: /\.css$/, //averigua se o arquivo é realmente css
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map'
};
