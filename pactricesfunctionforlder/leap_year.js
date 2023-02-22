

// function number(value){
//     let squareVale = value * value;
//     console.log(squareVale);
// }
// number(5);



// function leapYear(year){
//     let YearNum = year % 4;
//     if(YearNum == 0){
//         console.log(year , 'this year is leapyear')
//     }
//     else{
//         console.log(year, ' this year is not leap year')
//     }
// }
// leapYear(2024);








function leapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(year , 'this year is leapyear')
    }
    else{
        console.log(year, ' this year is not leap year')
    }
}
leapYear(1970);





