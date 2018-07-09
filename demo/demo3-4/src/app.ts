const NUM=45 

interface Cat {
    name:string,
    sex:string
}

function touchCat(cat:Cat){
    console.log('miao~',cat.name)
}

touchCat({
    name:'tom',
    sex:'男'
})