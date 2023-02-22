


// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.



let firstNum = 13 ;
let secondNum = 79 ;
let thirdNum = 45 ;

if(firstNum > secondNum && firstNum > thirdNum){
    console.log( firstNum, 'number is largest');
}
else if(secondNum > firstNum && secondNum > thirdNum){
    console.log( secondNum, 'number is largest');

}
else{
    console.log( thirdNum, 'number is largest');

}