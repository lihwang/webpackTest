import base from './css/bass.less'
import common from './css/common.less'


var app=document.getElementById('app');
app.innerHTML='<div class="'+base.box+'"></div>'

// base.use();
// base.unuse();

// var flag=false;

// setInterval(function(){
//    if(flag){
//     base.use();
//    } else{
//     base.unuse();
//    }
//    flag=!flag;
// },500)

import(/* webpackChunkName:'a' */ './components/a').then(function(a){   //动态加载
    console.log(a)
})