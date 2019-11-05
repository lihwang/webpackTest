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
// import "@babel/polyfill"
// import counter from './counter';
// import number from './number';
// counter();

// if(module.hot){
//     module.hot.accept('./number',()=>{
//         number();
//     })
// }
// number();

// import {add} from './math'

// add(1,2);

//只导入add 打包就不要全部的math文件

// import _ from 'lodash';

// console.log(_.join(['a','b','c'],"***"))


// function getComponent() {   //动态载入使用魔法语法命名chunkName
//     return import(/* webpackChunkName:"lodash" */ "lodash").then(({ default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Dell', "Lee"], '-');
//         return element;
//     })
// }


// document.body.onclick = function () {
//     getComponent().then(element => {
//         document.body.appendChild(element);
//     })
// }


// async function getComponent() {   //动态载入使用魔法语法命名chunkName
//     // const { default: _ } = await import(/* webpackChunkName:"lodash" */ "lodash");

//     // return element;
// }


// document.addEventListener('click', () => {
//     // var element = document.createElement('div');
//     // element.innerHTML = _.join(['Dell', "Lee"], '-');
//     // element.innerHTML = "Dell Lee";
//     // document.body.appendChild(element);
//     // getComponent().then(element => {
//     //     document.body.appendChild(element);
//     // })
//     import (/* webpackPrefetch: true */ './click').then(({default:func})=>{
//         func();
//     })
// })


// import './index.css';
// import './style.css';
// console.log('hello world')


// import _ from "lodash";
// import $ from 'jquery';
// import {ui} from './jquery.ui'
// ui();
// const dom=$('<div>');
// dom.html(_.join(['Dell','Lee'],'---'));
// $('body').append(dom);

// console.log(this)

// if('serviceWorker' in navigator){
//     window.addEventListener('load',()=>{
//         navigator.serviceWorker.register('./service-worker.js').then(registration=>{
//             console.log('serviceWorker registed');
//         }).catch((error)=>{
//             console.log('serviceWorker registed error');
//         })
//     })
// }


import React,{ Component } from 'react'
import ReactDom from 'react-dom';
// import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom'
// class App extends Component {
//     componentDidMount() {
//         axios.get('/react/api/header.json').then((res)=>{
//             console.log(res)
//         })
//     }
//     render() {
//         return <div>
//             Hello World
//         </div>
//     }
// }


// ReactDom.render(<App />, document.getElementById('root'));

import Home from './home'
import List from './List'

class App extends Component {

    render() {
        return <BrowserRouter>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/list" component={List} />
            </div>
        </BrowserRouter>
    }
}


ReactDom.render(<App />, document.getElementById('root'));




