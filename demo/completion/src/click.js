function handleClick() {   //动态载入使用魔法语法命名chunkName
    var element = document.createElement('div');
    element.innerHTML = "Dell Lee";
    document.body.appendChild(element);
}

export default handleClick;