
//13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
function func(obj){
    var names=[];
for(var x in obj){
    const vals=Object.values(obj[x])
    names.push(vals);
}
console.log(names);

}
const data={personal:{fname:'poly',lname:'boss'},
            education:{
                primary:'gesure',
                secondry:'nyaikuro',
                college:'MIT'
            }
}
func(data);