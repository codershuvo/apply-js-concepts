// function isLeapYear (year) {
//     const remainder = year % 4; 
//     if (remainder == 0) {
//         return true; 
//     }
//     else {
//         return false; 
//     }
// }

// const result = isLeapYear(2020); 
// console.log(result); 


function checkLeapYear (year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) { 
        return year + ': is a leap year'; 
    }
    else {
        return year + ': is not a leap year';  
    }
}

const result = checkLeapYear(2000); 
console.log(result); 