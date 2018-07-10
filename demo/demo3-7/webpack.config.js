var webpack=require('webpack');
var path=require('path');
module.exports={
    entry:{
        'pageA':'./src/pageA.js',
        // 'pageB':'./src/pageB.js',
        // 'vendor':['lodash']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',        //动态打包加载的路径  发布地址
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    // plugins:[
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name:['vendor','wepacon'],
    //         minChunks:Infinity
    //     }),
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name:'common',
    //         minChunks:2,
    //         chunks:['pageA','pageB']
    //     }),
    // ]
}