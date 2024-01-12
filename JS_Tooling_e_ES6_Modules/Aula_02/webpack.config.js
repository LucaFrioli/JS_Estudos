const path = require(`path`); //CommonJS

module.exports = {
    //configuração do webpack
    mode: `development`,//modo de desenvolvimento mantém o código como ele realmente está
    entry: `./src/main.js`,//arquivo que irá entrar inicialmente
    //__dirname é uma variavel que indica o diretorio atual, tudo que vem em virgulas indica o caminho que estamos seguindo
    output: {
        path: path.resolve(__dirname, `public`, `assets`, `js`),//onde o arquivo gerado vai ser salvo
        filename: `bundle.js`//nome do arquivo salvo
    },
    module: {
        rules : [
            {
                //regras de javascript
                exclude : /node_modules/,//arquivos e diretórios que não serão analizados pelo webpack
                test : /\.js$/,//averiga se a extensão do arquivo é js
                use : {//uso de pacote
                    loader : `babel-loader`,//qual pacote vai carregar
                    options : {
                        presets : [`@babel/env`]//em qual opção
                    }
                }
            }
        ]
    },
    devtool: `source-map`
};
