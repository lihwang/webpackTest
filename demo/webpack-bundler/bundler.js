const fs =require('fs');
const path=require('path');
const babelParser=require("@babel/parser");
const babelTraverse=require("@babel/traverse").default;
const babel=require('@babel/core');
const moduleAnalyser=(filename)=>{
    const content =fs.readFileSync(filename,'utf-8');
    const ast=babelParser.parse(content,{
        sourceType:"module"
    })
    const dependencise={};
    //ImportDeclaration传对应的函数名字就是需要寻找的node节点
    babelTraverse(ast,{
        ImportDeclaration({node}){
            const dirname=path.dirname(filename);
            const newFile='./'+path.join(dirname,node.source.value);//获取bundler目录下的路径
            dependencise[node.source.value]=newFile;
        }
    })
    // debugger
    
   const {code}=babel.transformFromAst(ast,null,{
        presets:["@babel/preset-env"]
    })
    //code可以运行的代码
    return {
        filename,
        dependencise,
        code
    }
}

const makeDependencnciesGraph=(entry)=>{
    const entryMoudle=moduleAnalyser(entry);
    // console.log(entryMoudle)
    const graphArry=[entryMoudle];
    for(let i=0 ;i<graphArry.length;i++){
        const item=graphArry[i];
        const {dependencise}=item;
        if(dependencise){
            for(let j in dependencise){
                graphArry.push(moduleAnalyser(dependencise[j]));
            }
        }
    }
    // console.log(graphArry)
    const graph={};
    graphArry.forEach(item=>{
        graph[item.filename]={
            dependencise:item.dependencise,
            code:item.code
        }
    })
    return graph;
}

const generateCode=(entry)=>{
    const graph=JSON.stringify(makeDependencnciesGraph(entry));//执行代码缺少require和exports---'"use strict";\n\nvar _message = _interopRequireDefault(require("./message.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nconsole.log(_message["default"]);'
    return `(function(graph){
            function require(module){
                function localRequire(relationPath){
                    return require(graph[module].dependencise[relationPath])
                }
                var exports={};
                (function(require,exports,code){
                    eval(code);
                })(localRequire,exports,graph[module].code)
                return exports;
            };
            require('${entry}')
        })(${graph})`;
     

}
console.log(generateCode('./src/index.js'))

//  const graghInfo=makeDependencnciesGraph('./src/index.js');
//  console.log(graghInfo)

//  入口分析
// 1.做入口模块分析 moduleAnalyser
// 2.依赖分享递归分析