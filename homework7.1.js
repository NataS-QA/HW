var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};
//Full price
function price(){
    let sum = 0;
    for (let key in services){
    let num = parseInt(services[key]);
    sum+=num;
    }
    return sum
}
  console.log(price());
  
  //Min Price
  function minPrice(){
     let minValue = 0;
     for(let key in services){
         let num = parseInt(services[key]);
         if (!minValue || minValue>=num){
             minValue = num;
         }
     }
     return minValue
  }
  console.log(minPrice());
  
  //Max Price
  function maxPrice(){
     let maxValue = 0;
     for(let key in services){
         let num = parseInt(services[key]);
         if (maxValue<=num){
             maxValue = num;
         }
     }
     return maxValue
  }
  console.log(maxPrice());