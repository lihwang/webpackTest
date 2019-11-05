import * as _ from "lodash";

class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }

    greet(){
        // return 'hello,'+this.greeting
        return _.join("")
    }
}

let greeter=new Greeter('world');
// let button=document.createElement("button");
// button.textContent='Say,Hello';
// button.onclick=function(){
//     greeter.greet();
// }

// document.body.appendChild(button);