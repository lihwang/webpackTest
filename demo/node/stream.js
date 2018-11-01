// var fs = require('fs');
// var data = '';

// var readerStream =fs.createReadStream('test.txt');


// readerStream.setEncoding('UTF8')
// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//     console.log('chunk='+chunk)
//     data += chunk;
//  });

//  readerStream.on('end',function(){
//     console.log(data);
//  });
 
//  readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");


// var fs = require("fs");
// var data = '菜鸟教程官网地址：www.runoob.com';

// // 创建一个可以写入的流，写入到文件 output.txt 中
// var writerStream = fs.createWriteStream('output.txt');

// // 使用 utf8 编码写入数据
// writerStream.write(data,'UTF8');

// // 标记文件末尾
// writerStream.end();

// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });

// writerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");

var fs=require('fs');
var zlib = require('zlib');


//复制文本内容到pipe文件内
// let input= fs.createReadStream('input.txt');
// let output= fs.createWriteStream('output.txt');

// input.pipe(output);

// console.log("程序执行完毕");

// fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

// console.log('压缩成功！');



fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));

console.log('解压成功！');


