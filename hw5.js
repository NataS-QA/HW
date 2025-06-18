let x = 3;
let y = 2;

function pow(x,y){
    let result=1;
    for(let i=0;i<x;i++){
     result = y*result;
    }
    return result;
}
console.log(pow(x,y));