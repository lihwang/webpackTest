module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: { //使用参数时可以改为对象
                    loader: 'babel-loader',
                    options: {
                        // "presets": [
                        //     ["babel-preset-env", { //为presets添加参数
                        //         targets: { //支持类型  node/浏览器
                        //             browsers: ['>1%', 'last 2 versions'] //支持的版本 最新的或者全球使用量超过1%  当支持的语法程度不一样打包出来也不一样
                        //         }
                        //     }
                        // ]]
                    }
                },
                exclude: '/node_modules/'
            }
        ]
    }
}