#Tree Shaking（去除未使用的代码）上线可以使用
针对：JS，CSS

场景：
  常规优化
  引入第三方库的部分功能


#JS处理：
    ##webpack.optimize.uglifyjs   (new Webpack.optimize.UglifyJsPlugin)   Webpack内自带
    webpack内  标示出是否使用  
    /* harmony export (immutable) */ 使用
    /* unused harmony export b */  未使用 


引入后发现虽然开启了new Webpack.optimize.UglifyJsPlugin 但是仍然很大，只有看引入的函数是否是模块导出的，否则会导入整个文件；
如果库的本身没有Tree Shaking那么只有借助插件,或则引入别的插件


babel-loader 8.x对应babel-core 7.x       babel-core7.0后改名为@babel-core

babel-plugin-xxx：babel转译过程中使用到的插件，其中babel-plugin-transform-xxx是transform步骤使用的
babel-preset-xxx：transform阶段使用到的一系列的plugin
babel-polyfill：JS标准新增的原生对象和API的shim，实现上仅仅是core-js和regenerator-runtime两个包的封装
babel-runtime：功能类似babel-polyfill，一般用于library或plugin中，因为它不会污染全局作用域


babel是一个转译器，感觉相对于编译器compiler，叫转译器transpiler更准确，因为它只是把同种语言的高版本规则翻译成低版本规则，而不像编译器那样，输出的是另一种更低级的语言代码。
但是和编译器类似，babel的转译过程也分为三个阶段：parsing、transforming、generating，以ES6代码转译为ES5代码为例，babel转译的具体过程如下：

ES6代码输入 ==》 babylon进行解析 ==》 得到AST
==》 plugin用babel-traverse对AST树进行遍历转译 ==》 得到新的AST树
==》 用babel-generator通过AST树生成ES5代码

https://www.jianshu.com/p/e9b94b2d52e2


    "@babel/core": "^7.1.2",
    "babel-loader": "^8.0.4",
    "babel-preset-env": "^1.7.0",

    "babel-plugin-lodash": "^3.3.4",


#CSS处理：

purify CSS   ==》purifycss-webpack


       new Purifycss({
            paths:glob.sync([
                path.join(__dirname,'./index.html'),
                path.join(__dirname,'./src/*.js')
            ])
        }),