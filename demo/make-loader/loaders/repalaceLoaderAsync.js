const loaderUtils = require("loader-utils");
module.exports = function (source) { //不能用箭头函数。this会变化
    // console.log(source)
    // console.log(this.query)//内部query可以拿到外部options的参数
    // console.log(this)

    // setTimeout(() => {

    // }, 1000);
    const callback = this.async();//loader里的异步操作

    const options=loaderUtils.getOptions(this);
    // const result=source.replace('dell',options.name);
    // this.callback(null,result); //通过callbacka传递其他参数带回来，一般return

    setTimeout(() => { //异步特殊处理
        const result = source.replace('dell', options.name);
        callback(null,result)
    }, 1000);
    //在webpack-api-loader.api处理
}