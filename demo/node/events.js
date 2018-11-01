var events=require('events');

var emitter = new events.EventEmitter();

emitter.on('someone',function(arg1,arg2){
    console.log('someone1',arg1,arg2)
})

emitter.on('someone',function(arg1,arg2){
    console.log('someone2',arg1,arg2)
})

emitter.emit('someone','arg1 参数1','arg2 参数2')