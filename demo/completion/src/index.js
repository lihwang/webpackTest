// var a=require('./a');
// import sign from "./sign.png"
// import style from "./index.scss";
// import creatSign from './creatSign'

// creatSign();

// var img=document.createElement("img");
// img.src=sign;

// img.classList.add(style.sign);
// var root=document.getElementById('root');
// root.append(img);

// console.log('11111')


// import "./index.css"
// var btn =document.createElement('button');
// btn.innerHTML="新增";
// document.body.appendChild(btn);
// btn.onclick=function(){
//     var div=document.createElement("div");
//     div.innerHTML='div';
//     document.body.appendChild(div);
// }

import counter from './counter';
import number from './number';
counter();

if(module.hot){
    module.hot.accept('./number',()=>{
        number();
    })
}
number();