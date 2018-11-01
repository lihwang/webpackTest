import base from './css/base.less';

var app=document.getElementById('app');
// app.innerHTML='<div class"'+base.box+'"></div>';
var div=document.createElement('div');
div.className='sex';
app.append(div);
import {a} from './common/util';
import {chunk} from 'lodash'
console.log(a());
console.log(chunk([1,2,3,4,5],2))