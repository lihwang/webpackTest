//基本配置  (注意路径问题)一般导入记得查看路径
module.exports={
    entry:{
        app:'./app.js'
    },
    output:{
        filename:'[name].[hash:5].js'
    }
}