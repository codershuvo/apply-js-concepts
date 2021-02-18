function isPrime (n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime Number'; 
        }
    }
    return 'Your Number is a prime Number'; 
}

var result = isPrime(13); 
console.log(result); 