class CopyrightWebPlugin{
    constructor(options){
        console.log(options)
        console.log('插件被使用了')
    }

    apply(compiler){  //compiler--webpack的实例打包所有的东西
        // console.log(compiler)
        //区分钩子异步或者同步状态对应操作也不一样
        //emit 异步操作
        compiler.hooks.emit.tapAsync('CopyrightWebPlugin',(compilation,cb)=>{
            debugger
            //查看各种参数
            //compilation此次打包所保存的信息
            // console.log(compilation.assets)
            compilation.assets['copyright.txt']={
                source:function(){
                    return "copyright by dell Lee"
                },
                size:function(){
                    return 21;
                }
            }
            cb();
        })

        //同步时刻
        compiler.hooks.compile.tap('CopyrightWebPlugin',(compilation)=>{
             console.log('compile')
        })

    }
}

module.exports=CopyrightWebPlugin;