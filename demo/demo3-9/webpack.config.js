var webpack=require('webpack');
var path=require('path');
var ExtractTeztWebpackPlugin=require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports={
    entry:{
        app:'./src/app.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath:'./dist/',        //动态打包加载的路径  发布地址
        filename:'[name].bundle.js', //初始化打包名称
        chunkFilename:'[name].bundle.js',//动态加载打包名称
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:ExtractTeztWebpackPlugin.extract({  //插件提取处理
                    fallback:{
                        loader:'style-loader',
                        options:{
                            singleton:true,
                            transform:'./css.tranform.js'
                        }
                    },
                    use:[{
                            loader:'css-loader',
                            options:{
                                modules:true,
                                localIdentName:'[path][name]_[local]_[hash:base64:5]' //编码名称规则
                            }
                        },{
                            loader:'postcss-loader',
                            options:{
                                ident:'postcss',
                                plugins:[
                                    // require('autoprefixer')(),
                                    require('postcss-cssnext')()
                                ]
                            }
                        },{
                            loader:'less-loader',
                        }
                    ]
                })
                
            }
        ]
    },
    plugins:[
        new ExtractTeztWebpackPlugin({ //插件配置
            filename:'[name].min.css',
            allChunks:true
        }),
    ]
 
}