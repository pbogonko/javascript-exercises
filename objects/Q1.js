// 1.
// Write a JavaScript program to list the properties of a JavaScript object.

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

for(let i=0;i<Object.keys(student).length;i++){
    console.log(Object.keys(student)[i]);
    
}
