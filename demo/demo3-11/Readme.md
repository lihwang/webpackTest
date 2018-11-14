#图片处理、字体文件、第三方库
    1.图片处理
        css种引入图片     file-loader      url-loader也有file-loader的功能
        自动合成雪碧图    postcss-sprites
        压缩照片         img-loader
        base64编码       url-loader
  
  

#postcss-cssnext
postcss 只是一个工具，本身不会对css一顿操作，它通过插件实现功能，autoprefixer 就是其一。
1 . 使用下一代css语法
2 . 自动补全浏览器前缀
3 . 自动把px代为转换成 rem
4 . css 代码压缩等等

常用的postcss插件

postcss-cssnext、autoprefixer、postcss-pxtorem


#处理字体

   也是使用  url-loader

   ---因为打包路径问题也是需要在option上处理下



#处理第三方库

1.直接使用cdn上  页面饮用
2.本地使用不希望 每次import 第三方库

解决：
1.webpack.providePlugin  所有模块饮用   {1.通过npm 2.通过resolve解析到本地}
2.imports-loader
3.直接全局引用window（不建议）


   test:path.resolve(__dirname,'src/app.js'),
                use:[
                    {
                        loader:'imports-loader',
                        options:{
                            $:'jquery'
                        }
                    }
                ]


#生成HTML
    HtmlWebpackPlugin


#HTML中引入的照片
    html-loader
    也可以在src中写入  '${require(src/*****.png)}'

#配合优化
提前载入webapck加载代码

html-webpack-inline-chunk-plugin(建议)