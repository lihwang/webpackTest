
require.include('./moduleA')  //会打包到pageA中
//commonjs异步加载
var page='subPageA';
if(page==='subPageA'){

    //动态import（会执行） 注释会添加chunk名字
    
    import(/* webpackChunkName:'subPageA' */'./subPageA').then(function(subPageA){
        console.log(subPageA)
    })
    // require.ensure(['./subPageA'], function () {
    //     var _ = require('./subPageA');
    // },'subPageA')
}else if(page==='subPageB'){
    // require.ensure(['./subPageB'], function () {
    //     var _ = require('./subPageB');
    // },'subPageB')
    import(/* webpackChunkName:'subPageA' */'./subPageB').then(function(subPageA){
        console.log(subPageB)
    })
}

// import * as _ from 'lodash';
require.ensure([], function () { //光加载不执行
    var _ = require('lodash'); //执行代码
    _.join(['1', '2'],'3')
}, 'vendor')

//commonJs的require是同步加载的。以上方式是异步加载的
//以上代码将插件与业务代码分离
export default 'pageA';