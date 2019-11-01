const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack= require("webpack");
const merge=require('webpack-merge');

const devConfig=require('./webpack.dev');
const prodConfig=require('./webpack.prod');
const devMode = process.env.NODE_ENV !== 'production';

const commonConfig = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, '../dist'),
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
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    // "style-loader", //MiniCssExtractPlugin也有热更新了
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                            // reloadAll: true,// if hmr does not work, this is a forceful method.
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,  //scss内导入前@***执行前也要走两个loader
                            modules: true//css模块化
                        }
                    }, "postcss-loader", "sass-loader"
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {loader: "babel-loader"},
                    {loader:"imports-loader?this=>window"}
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename: devMode ? '[name].css' : '[name].[hash].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new webpack.ProvidePlugin({ //当发现业务代码中使用了$模块内部会自动导入'jquery',
            $:"jquery",
            _join:['lodash','join'],  //打包指定的方法lodash的join，可以全局用_join
        })
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        runtimeChunk:{//老版本未更改hash变化解决
            name:'runtime'
        },
        usedExports: true,//要做排除的去sideEffects设置
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
            cacheGroups:{
                mainStyles: {//根据入口打包不同的css
                    name: 'main',
                    test: (m, c, entry = 'main') =>
                      m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true,
                  },
                //   barStyles: {
                //     name: 'bar',
                //     test: (m, c, entry = 'bar') =>
                //       m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                //     chunks: 'all',
                //     enforce: true,
                //   },
            }
            
        }
    },
    performance:false,//禁止提示性能问题
}

module.exports=()=>{
    if(devMode){
        return merge(commonConfig,prodConfig);
    }else{
        return merge(commonConfig,devConfig);
    }
}



function recursiveIssuer(m) {
    if (m.issuer) {
      return recursiveIssuer(m.issuer);
    } else if (m.name) {
      return m.name;
    } else {
      return false;
    }
}
  