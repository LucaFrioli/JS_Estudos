## Adicionando ao Boilerplate loaders de CSS :

Foram adicionadas as dependencias de projeto :
- style-loader
- css-loader

Para adicionalas bastou utilizar o seguinte comando no teminal :

~~~powershell
    npm i style-loader css-loader
~~~

E para configurar o seu uso utilizamos dentro do webpack.config dentro de rules o seguinte código :

~~~javascript
            {
                //regras css
                test: /\.css$/,
                use: [`style-loader`,`css-loader`]
            }
~~~

### Dependencias até o momento :

- js-core
- regenerator-runtime
- style-loader
- css-loader

*OBS :* Para averiguar as dependencias de desenvolvimento olhe o package.json;
