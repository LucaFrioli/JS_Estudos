const path = require('path');//ignorar a quick fix 

module.exports = {
    mode: `development`,
    entry: `./src/app.js`,
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `bundle.js`
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [`@babel/env`]
                    }
                }
            }
        ]
    },
    devtool: `source-map`
}
