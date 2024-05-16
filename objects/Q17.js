// 17. Write a JavaScript function to check whether an object contains a given property
const mydata={name:'polycarp',id:123456}
function check(obj,prop){
   if(obj.hasOwnProperty(prop)){
    console.log('property is available');
   }else{
    console.log('not available')
   }
}
check(mydata,'fname');