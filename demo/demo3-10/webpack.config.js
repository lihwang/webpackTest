var Webpack=require('webpack');
var path=require('path');
var ExtractTeztWebpackPlugin=require('extract-text-webpack-plugin');
var Purifycss=require('purifycss-webpack');
var glob=require('glob-all')

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
                        }
                    },
                    use:[{
                            loader:'css-loader',
                        },{
                            loader:'less-loader',
                        }
                    ]
                })
                
            },
            {
                test:/\.js$/,  
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env'],
                            plugins:['lodash']
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new ExtractTeztWebpackPlugin({ //插件配置
            filename:'[name].min.css',
            allChunks:true
        }),
        new Purifycss({
            paths:glob.sync([
                path.join(__dirname,'./index.html'),
                path.join(__dirname,'./src/*.js')
            ])
        }),
        new Webpack.optimize.UglifyJsPlugin()//删除不用的js和css
    ]
 
}