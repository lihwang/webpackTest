var fs=require('fs'); //sync:  同步
// var data=fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log('程序结束');

// fs.readFile('test.txt',function(err,data){  //默认不加都为异步操作，都含有回掉
//     if(err) return console.log(err);
//     console.log(data.toString());
// });
// console.log('程序结束');

// var events = require('events');
// var eventEmitter=new events.eventEmitter();
// eventEmitter.on('eventName',eventHandler)
// eventEmitter.emit('eventName')


// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");