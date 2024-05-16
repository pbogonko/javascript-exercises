// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function retrieve(obj){
    return Object.values(obj)
}
const mydata={name:'polycarp',id:123456,age:23,nationality:'kenyan'} 
console.log(retrieve(mydata));