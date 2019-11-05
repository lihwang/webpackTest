const path=require('path');

module.exports={
    mode:"production",
    entry:"./src/index.js",
    externals:['lodash'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'library.js',
        libraryTarget:'umd',//库打包挂载位置，，//global,window,this,umd
        library:'root',//库打包
    }

}