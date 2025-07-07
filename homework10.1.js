var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
function testEmail(array){
      let result=[];
     for(let i=0;i<array.length;i++){
    let email=/\b[\w.-]+@(gmail|yahoo)\.com\b/;
    let res=array[i].email.match(email);
          if (res!=null){
              result.push(array[i].email);
          };
     };
    return result;
 }
 console.log(testEmail(arr));