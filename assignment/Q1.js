/*Quiz One: Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays the message "Good Work" if the input matches the guess number otherwise "Not matched".

Quiz 2: Write a JavaScript program to check a student's total marks in various examinations. The student will get an A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final" the student will receive an A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.

three types of exam(final,mid,cat)
A+--->89-100 && final

*/



//Q1
let test=5;
let num;

do{
    num=prompt('enter a number');
    if(num==test){
        alert('Good Work')
    }else{
        alert('Not matched')
    }
}while(num >10){
   
}


