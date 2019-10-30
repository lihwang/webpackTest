--watch 只能监听打包文件不能刷新浏览器
webpack-dev-server 帮忙刷新了页面全部渲染了一边，没有热更新
 devServer:{
     contentBase:'',//监听目录
     open:'',//自动打开
     port:9090,//重新打开端口
 }


 //自己写服务监听（比较复杂，推荐使用devServer）
