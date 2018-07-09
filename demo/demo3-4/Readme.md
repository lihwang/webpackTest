  typescript-loader

  1. typescript是js的超集  
    npm i typescript ts-loader --save-dev  官方的
    npm i awesome-typescript
    配置
    tsconfig.json


    常用配置项目
    compilerOptions 
    include
    exclude


引入js时也可以安装声明文件
npm i @types/lodash


一个个安装过于复杂
Typings   可以全局安装类库
然后typings i lodash
使用它的话话需要在tsconfig.json中"compilerOptions"    "typeRoots" : [ " ./node_modules/@type" ,"./typings/modules" ]