// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function convert(obj){
     let list=[];
     let mykeys=Object.keys(obj)
     let myprop=Object.values(obj);
     for(var x in mykeys,myprop){
          list.push(mykeys[x],myprop[x])
          
     }
     console.log(list)
     
}
const mydata={name:'polycarp',id:123456,age:23,nationality:'kenyan'} 
convert(mydata)