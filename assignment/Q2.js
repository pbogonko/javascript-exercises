// Question 3: What is the output of the following code. Explain

let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);
console.log(obj)

//OUTPUT:
// String One
// String One
// true
//javascripts converts 1 and '1' to a common type that is why obj[1] prperty is replaced by obj['1'] since they were treated as one thing during updation
