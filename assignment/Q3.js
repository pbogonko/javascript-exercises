/*Write a JavaScript function that determines a student's grade based on their total marks and the type of examination. The function should return a specific message based on the student's grade.

Grading Criteria
For a general examination:

A+ grade: Total marks are between 89 and 100 inclusive. Return "Excellent job, you got an A+."
A grade: Total marks are between 80 and 88 inclusive. Return "Good job, you got an A."
B+ grade: Total marks are between 7 79 inclusive. Return "Well done, you got a B+."
B grade: Total marks are between 70 and 74 i5 andnclusive. Return "Nice work, you got a B."
C grade: Total marks are between 60 and 69 inclusive. Return "You got a C."
Below C grade: Total marks are below 60. Return "You need to improve."
For the "Final" examination:

A+ grade: Total marks are 90 or above. Return "Excellent job, you got an A+."
The other grade ranges remain the same as for a general examination.
Function Requirements
Write a function named checkGrade that takes two parameters:

totalMarks (a number): The student's total marks.
examType (a string): The type of examination ("Final" or any other type).
The function should return a message based on the criteria above.

function checkGrade(totalMarks, examType) {
// Your code here
}

Examples
checkGrade(95, 'Final')
Output: "Excellent job, you got an A+."

checkGrade(85, 'Final')
Output: "Good job, you got an A."

checkGrade(88, 'Midterm')
Output: "Good job, you got an A."

checkGrade(77, 'Midterm')
Output: "Well done, you got a B+."

checkGrade(65, 'Midterm')
Output: "You got a C."

checkGrade(55, 'Final')
Output: "You need to improve."

Implementation
Implement the function to handle the described conditions and return the correct message based on the provided examples.*/



let grade;
function checkGrade(marks,examType){
    if (examType === 'final' || examType === 'midterm') {
    if(marks>=90&&marks<=100 ){
        grade='A+'
    
        console.log('Excellent job, you got an A+.')
    }else if (marks>=89 &&marks<=100 ){
        grade='A+'
        console.log('Excellent job, you got an A+')
    }else if(marks>=80 &&marks<=88) {
        grade='A';
        console.log('good job, you got an A')

    }else if(marks>=75 &&marks<=79) {
        grade='B+';
        console.log('well done, you got a B+');

    }else if(marks>=70 &&marks<=74){
        grade='B';
        console.log('nice work,you got a B')

    }else if (marks>=60 && marks<=69){
        grade='C';
        console.log('you got a C');

    }
    else {
        console.log('you need to improve for the final examination')
    }
}
}
checkGrade(95, 'final')
checkGrade(85, 'final')
checkGrade(88, 'midterm')
checkGrade(77, 'midterm')
checkGrade(65, 'midterm')
checkGrade(55, 'final')



