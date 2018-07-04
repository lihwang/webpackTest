//es module
import sun from './sum'
console.log('sun(23,24) = ' + sun(23, 24))


//commonJs
var minus=require('./minus');
console.log('minus(24,17) = ' + minus(24, 17))

//AMD
require(['./muti'],function(muti){
    console.log('muti(2,4) = ' + muti(2, 4))
})