// 10! = 10*9*8*7*6*5*4*3*2*1

// var factorial = 1; 
// for (var i = 5; i >= 1; i--) {
//     factorial = factorial * i; 
//     // console.log(i, factorial); 
// }

// function factorialRecur (num) {
//     var factorial = 1; 
//     for (var i = num; i >= 1; i--) {
//         factorial = factorial * i; 
//     }
//     return factorial; 
// }

// var result = factorialRecur(5); 
// // console.log(result); 


// var factorial = 1; 
// var i = 0; 
// while (i>= 1) {
//     // console.log(i); 
//     i--; 
// }


function factorial(num) {
    if (num == 0) {
        return 1; 
    }
    else {
        return num * factorial(num - 1); 
    }
}
var checkFact = factorial(5); 
console.log(checkFact); 