#代码分割和懒加载

单页应用时不能等待所有的代码都加载完再去展示页面。等待时间太长。   所以需要代码分割和懒加载

webpack methods   
Es 2015 loader Spec；
    import()==>Promise
    import().then()


webpack import function
1. commonjs异步加载
require.ensure([], function(require){
    var list = require('./list');
    list.show();
});
2. commonjs预加载懒执行
require.ensure(['./list'], function(require){
    var list = require('./list');
    list.show();
});
#给require.ensure的第一个参数传了['./list']，执行到这里的时候list.js会被浏览器下载下来，但是并不会执行list.js模块中的代码，也就是webpack官网说的，不会进行evaluate。真正进行evaluate的时候是到了后面这句var list = require('./list');这就是所谓的懒执行。



ES6 import
import list from './list';
//等价于
var list = require('./list');


场景：

    分离业务代码和第三方依赖
    分离业务代码 和 业务公共代码 和第三方依赖
    分离首次加载 和 访问后加载的代码  --》提升首屏加载

    https://www.cnblogs.com/laneyfu/p/6262321.html


    require.include还有一个作用是能把子模块中的公共部分，提取到父模块中