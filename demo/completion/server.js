const express=require('express');
const webpack=require('webpack');
const webpackDevMiddleware=require('webpack-dev-middleware');
const config=require('./webpack.config');
const complier=webpack(config);//webpack编译器 每使用一次就渲染一次

const app=express();

app.use(webpackDevMiddleware(complier,{  //中间件监听编译器
    publicPath:config.output.publicPath,//输出路径保持一致
}))


app.listen(3000,()=>{
    console.log('server is running')
})


//node 中使用webpack
