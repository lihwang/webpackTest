Babel 配置

1. 虽然配置了Bebel但是不知道使用什么规范来编译。需要使用      (语法编译)

babel presets === >> 规范的总结 

一般开发时使用env

2.  当一些额外的基础方法不支持时需要 Babel Polyfill (全局垫片)       （污染 函数和方法）   .babelrc
    类似Array.from .....  arr.include().....     为开发应用准备的。    

    可以直接导入  import 'babel-polyfill'   

    Babel Runtime Transform  (局部垫片) 
    为开发框架准备的。