//16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
function convert(obj){
    var objReverse={};
    var key=Object.keys(obj);
    var value=Object.values(obj);
    for (var x in key,value){
        objReverse[value[x]]=key[x];
        
    }
    console.log(objReverse)
}

const mydata={name:'polycarp',id:123456,age:23,nationality:'kenyan'} 
convert(mydata);