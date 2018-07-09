#提取公共代码

1.减少代码冗余，提升加载速度

方法：  CommonsChunkPlugin插件 （是一个webpack内置的插件   webpack.optimize.CommonsChunkPlugin）

要导入option{
    name:chunkname名字
    filename:
    minChunks:
    chunks:提取范围
    children:
    deepChildren:
    async:
}


场景：
1. 单页面应用
2. 应用应用+第三方依赖
3. 多页应用+第三方依赖+webpack生成代码


#提取提示：webpack4已经放弃了CommonsChunkPlugin插件，
当entry只有一个入口时无法提取公共代码--->必须多入口  
当使用插件时，我们需要区分插件代码和业务逻辑代码  ，将插件代码也作为入口文件单独打包
CommonsChunkPlugin配置name和入口名字一样时会将name文件名字和公共代码打包放在一起，
当需要把插件和webpack生成代码要分开的话需要再新建一个CommonsChunkPlugin 的实例，name不能与入口相同，公共代码的提取也可以通过chunks：[]制定范围

当CommonsChunkPlugin配置项相同时，可以合并 将name改为 names：[] 然后将name按顺序填写进去