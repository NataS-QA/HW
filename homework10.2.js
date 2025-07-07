const text=['Wonderful', 'Joyful', 'Happiness', 'Time', 'Task', 'Apple'];
function regular(arr){
    let result=[];
let check = /^[^Aa]{6,}$/;
for(let i=0;i<arr.length;i++){
let res= arr[i].match(check);
if(res!=null){
    result.push(arr[i]);
}
}
return result;
}
console.log(regular(text));
