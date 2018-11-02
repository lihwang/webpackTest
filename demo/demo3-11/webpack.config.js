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
        // publicPath:'./dist/',        //动态打包加载的路径  发布地址
        filename:'[name].bundle.js', //初始化打包名称
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
                            options:{
                                importLoaders:2
                            }
                        },{
                            loader:'postcss-loader',
                            options:{
                                ident:'postcss',
                                plugins:[
                                     require('postcss-sprites')({
                                        spritePath:'dist/assets/img/sprites',
                                        retina:true
                                     }), //添加前缀  记得要执行还可以传参数
                                     require('postcss-cssnext')() //添加前缀
                                    ]
                            }
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
            },
            {
                test:/.(png|jpg|jpeg|gif)$/,
                use:[
                    // {
                    //     loader:'file-loader',
                    //     options:{
                    //         publicPath:'',//发布路径
                    //         useRelativePath:true, //相对路径
                    //     }
                    // }
                    {
                        loader:'url-loader',
                        options:{
                            name:'[name][hash:5].min.[ext]',
                            limit:1500,
                            publicPath:'',//发布路径
                            useRelativePath:true, //相对路径
                        }
                    },{
                        loader:'img-loader', 
                        options:{
                            plugins:[
                                require('imagemin-pngquant')({
                                    floyd: 0.5,
                                    speed: 2
                                  })
                            ]
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
                path.join(__dirname,'./*.html'),
                path.join(__dirname,'./src/*.js')
            ])
        }),
        new Webpack.optimize.UglifyJsPlugin()//删除不用的js和css
    ]
 
}