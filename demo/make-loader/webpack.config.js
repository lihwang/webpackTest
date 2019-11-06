const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolveLoader:{
        modules:['node_modules','./loaders'] //不使用路径，直接使用自己写的loader
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [{
                    loader: 'repalaceLoader',
                }, {
                    loader: 'repalaceLoaderAsync',
                    // loader: path.resolve(__dirname, './loaders/repalaceLoaderAsync.js'),
                    options: {
                        name: 'lee'
                    }
                }]//..自己写的需要用本地相对路径
            }

        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}