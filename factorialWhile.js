var i = 1; 
var factorial = 1; 
while (i <= 10) {
    factorial = factorial * i; 
    // console.log(i, factorial); 
    i++; 
}

function factorialWhile (num) {
    var i = 1; 
    var factorial = 1; 
    while (i <= num) {
        factorial = factorial * i; 
        i++; 
    }
    return factorial; 
}

var result = factorialWhile(5); 
console.log(result); 