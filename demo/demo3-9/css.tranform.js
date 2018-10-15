module.exports=function(css){
    console.log(css);
    if(window.innerWidth>=768){
        return css.replace('red','green')
    }else{
        return css.replace('red','orange')
    }
}


//页面刷新才有用