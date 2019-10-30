import sign from "./sign.png"
function creatSign(){
    var img=document.createElement("img");
    img.src=sign;
    
    img.classList.add("sign");
    var root=document.getElementById('root');
    root.append(img);
}

export default creatSign;