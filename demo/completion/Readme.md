--watch 只能监听打包文件不能刷新浏览器
webpack-dev-server 帮忙刷新了页面全部渲染了一边，没有热更新
 devServer:{
     contentBase:'',//监听目录
     open:'',//自动打开
     port:9090,//重新打开端口
 }


 //自己写服务监听（比较复杂，推荐使用devServer）
//babel转换语法只是翻译的一部分，ES6==》ES5
还有对象和函数没办法转译至低版本浏览器兼容，@babel-polyfill


//Tree Shaking 只支持ES Module (静态导入)
    development模式，不会shaking抖掉不使用代码，sourceMap对应关系会破破坏
    production:可以抖掉
    
  "sideEffects":[
    "*.css"
  ],

  防止将css抖动掉


  //Code Splitting  代码分割
  业务代码和不修改的库代码分割开避免打到一个包里
  加载和更新都会更加快捷

  1.optimization--splitChunks 
  解析同步代码
  //可能会用到一些插件
  2.异步代码（import）也会被打包成一个文件（不需要做配置）

  可以通过动态的import实现懒加载
  如果动态导入的文件点击后才会被显示名字规则就是output--chunkFilename： 初次加载未导入

  //打包分析webpack-bundle-analyzer
  //官网分析 "dev-build": "webpack --profile --json > stats.json --config ./build/webpack.dev.js",
  --profile --json > stats.json将打包记录取出送至官网打包分析代码


代码利用率
进入控制台 commond +shift+p show coverage 点击记录，js利用率


未使用的业务代码使用动态import导入解决首次加载的问题，但是所有的代码都等待被加载，每次操作加载后变得很慢
所以就要使用preloading,Prefetching(利用空闲网路来加载页面)英文版本官网有，在代码分割里


//cache 合理缓存
[contenthash]文件内容进行变化，仅线上使用

//Shimming 垫片解决低版本浏览器兼容问题
例子：当你想使用jq.ui.js库的时候，它是需要使用jq的，但是呢作为模块打入你又不能改源码，就需要使用垫片

//一般js模块内部的this，是指向模块本身的，是一个空对象，如果希望指向window 
imports-loader?this=>window

//环境变量
webpack --env.production=true 
可以在module.exports=(env)=>{
  if(env&&env.production) 可以作为环境判读
}



[PWA](https://www.jianshu.com/p/098af61bbe04)
离线使用

Type-script
安装typescript 还有tsconfig.json
导入包需要import * as --- from '--' 


webpackDevServer实现请求转发
一般请求不会去写绝对路径而是使用相对路径，当时有相对路径时就要区分线上和测试环境接口


webpackDevServer解决单页路由的问题****
当使用BrowserRouter去开发路由时
直接通过路由去查看页面会被误认为去访问接口
historyApiFallback（仅在测试环境解决）
上线得单独解决（后端修改ngix解决hash路由）


[ESLint]未学习完成
为了方便可以直接使用npx init -y提示解决


提升webpack打包速度
1.使用新的webpack，node，npm和yarn
2.exclude: /node_modules/,include去限定打包范围。提升速度降低loader的使用
3.Plugin尽可能的少使用，可靠性和官方
4.resolve参数合理配置
5.使用DllPlugin提高打包速度  
  5.1第三方文件只打包一次 add-asset-html-webpack-plugin
  5.2我们在引入第三方模块文件时就用dll文件 webpack.DllPlugin做映射文件
  5.3再使用去做映射 webpack.DllReferencePlugin
6.控制包文件大小 类似shaking（选用一些模块性的包）
7.thread-loader，parallel-webpack,happypack多进程打包（多页应用可以考虑）
8.合理使用sourceMap
9.结合stats分析打包结果来优化
10.开发环境内存编译
11.开发环境无用插件剔除。类似代码压缩
