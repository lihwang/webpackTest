#处理CSS

提取利用缓存加速加载，提取公共css

1.引入
2.CSS modules   
3.配置less/sass
4.提取css代码



loader是从下往上执行less-loader ==》css-loader ==》style-loader

style-loader 创建标签倒入样式  <style></style>
      style-loader/url  <link/>    :最好配合 file-loader 一起使用  不常用（多个插入就有多个link标签,会多次请求，影响性能）
      style-loader/useable   <style></style>和style-loader一起用动态写入file没用


      options.transform 可以通过js动态转换css
css-loader  主要为了可以import css文件

    alias(解析的别名)  缩减地址长度和通用化
    options:{
        modules:true
    }
    生成的类名随机如果需要自定义， localIdentName:'[path][name]_[local]_[hash:base64:5]'
    composes:bigbox from './common.css';  一般放在类名内顶部

less-loader  //处理less



提取css问题
1.extract-loader
2.ExtractTeztWebpackPlugin  插件要初始化。。
   allChunks:false,

postCSS  处理CSS工具
# cssnext可以让你写CSS4的语言，并能配合autoprefixer进行浏览器兼容的不全，而且还支持嵌套语法
$ npm install postcss-cssnext --save-dev

Autoprefixer   ==>自动前缀
CSS-nano ==> 压缩CSS       npm install --save-dev @intervolga/optimize-cssnano-plugin
CSS-next ==> 新语法识别 
#remove minimize option, use postcss-loader with cssnano or use optimize-cssnano-plugin plugin

broswerslist  //浏览器公用浏览器兼容级别  所有插件共用
 package.json
 .broswerslist



 Tree Shaking（去除未使用的代码）上线可以使用
针对：JS，CSS
