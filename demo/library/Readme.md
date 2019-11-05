//library 库操作


在webpack内得处理下使得自己的 库可以被多种方法使用
 1.import *** from 'library'
 2.let library=require('library');
 3.require(['library'],function(){

 })
解决： webpack--output--libraryTarget:'umd';

4.<script src="library.js">
解决： webpack--output--library:'library';



//库文件和使用方同时导入一个文件时多次导入的问题
webpack--externals:['lodash'],//多种形式
忽略导入的库 


npm publish  发布自己的包