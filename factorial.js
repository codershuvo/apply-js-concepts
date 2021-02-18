// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10

function factorial (num) { //  factorial for loop
    var factorial = 1; 
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial; 
}

var checkFact = factorial(10); 
// console.log(checkFact); 








