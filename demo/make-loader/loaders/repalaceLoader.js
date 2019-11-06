

module.exports = function (source) { //不能用箭头函数。this会变化
    return source.replace('lee', 'world');
}