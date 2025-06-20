let P=0;
let N=0;
function checkProbabilityTheory(count){
    for(let i = 0; i < count; i++){
        let num = Math.random();
        num*=1000;
        num=Math.round(num);
        if (num%2===0) {
            P++
        } else {
            N++
        }
    }
    return {
        P, N ,count
    }
}
const totalCount = 5
console.log(checkProbabilityTheory(totalCount));
let persentP = P/totalCount*100;
console.log("Парні числа " + persentP +"%");
let persentN = 100 - persentP;
console.log("Непарні числа " + persentN + "%");