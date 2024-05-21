//valueof-->The valueOf() method of String returns the primitive value of a String object as a string data type
const mystr=new String(' this is a string');
console.log(mystr)//returns the String object 
console.log(mystr.valueOf())//returns the value of the String object
//sup -->converts the given html text to subscript by enclosing it within the <sub></sub> tag
const mytext=document.getElementById('sub').innerHTML;
mytext.sub();
//sup-->converts the given html text to superscript
const mytext2=document.getElementById('sup').innerHTML;
mytext.sup();
//split

const myname='polycarp'
console.log(myname.split(''))
//slice
console.log(myname.slice(3,5))//The slice() method of String values extracts a section of this string and returns it as a new string
//repeat-->The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
const mystring='very'
console.log(mystring.repeat(3))

//replace
const str='this is a nice piece of tech'
const replaced=str.replace('nice','fine');
console.log(replaced);