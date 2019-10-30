
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
//pulgin有点类似生命钩子函数

module.exports = {
    mode: "development",
    devtool: 'source-map', //开发，cheap-module-eval-source-map  线上：cheap-module-source-map
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true,
        hot: true,
        hotOnly: true,//即使没有热更新也不刷新
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: '[name].[ext]',
                    outputPath: "images/"
                },
            }, {
                test: /\.(eot|ttf|svg)$/i,
                loader: 'file-loader',
            }, {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,  //scss内导入前@***执行前也要走两个loader
                            modules: true//css模块化
                        }
                    },
                    "sass-loader", "postcss-loader"
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    "postcss-loader"
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin.CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()//配合devServer,样式和js调试
    ]
}