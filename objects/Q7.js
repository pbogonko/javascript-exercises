// Write a JavaScript program that returns a subset of a string.
// Sample Data:
// dog
// Expected Output:
// ["d", "do", "dog", "o", "og", "g"]
var dog='dog';
let thisarr=[dog.slice(0,1),dog.slice(0,2),dog.slice(0,3),dog.slice(1,2),dog.slice(1,3),dog.slice(2,3)]
console.log(thisarr)