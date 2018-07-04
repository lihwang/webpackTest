使用两种规范

1.  sum.js使用ES6的导入
2.  minus.js使用commonJS规范
3.  muti.js使用AMD规范导入   多生成了一个bundle.js  ====== >>AMD异步加载  （引入的文件单独打包成一个）生成多生成一个文件


如果webpack 文件名不是webpack.config.js 需要执行  webpack --config '文件名'