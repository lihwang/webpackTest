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


  //打包分析webpack-bundle-analyzer
  代码利用率
  进入控制台 commond +shift+p show coverage 点击记录，js利用率

未使用的业务代码使用动态import导入解决首次加载的问题，但是所有的代码都等待被加载，每次操作加载后变得很慢
所以就要使用preloading,Prefetching(利用空闲网路来加载页面)英文版本官网有，在代码分割里