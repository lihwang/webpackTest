const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './'
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
        new CleanWebpackPlugin(
            // {dry: true,}
        ),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all",//异步同步全部
            // minSize: 30000,//分割的目标文件最小满足
            // minChunks: 2,//调用数
            // maxAsyncRequests: 5,//最大分割数
            // maxInitialRequests: 3,//入口数
            // automaticNameDelimiter: '~',//连接符号
            // name: true,
            // cacheGroups: {//满足后分割位置 
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10 //都符合和情况默认放到的优先级里
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true ,//存在的代码都不重复打包进入
            //     }
            // }
        }
    }
}