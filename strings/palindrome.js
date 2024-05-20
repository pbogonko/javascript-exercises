
 function palindrome(str){
    var newstr=str.split('');
    const newArr=newstr.reverse()
    const joinArr=newArr.join('')
    if(str===joinArr){
        console.log(`${str} is a palindrome`)
    }else{
        console.log(`${str} is not a palindrome`)
    }
    return joinArr

 }
 console.log(palindrome('DAD'))