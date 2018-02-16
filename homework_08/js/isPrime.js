function isPrime(arg) {
    for(var i = 2; i < arg; i++) {
        if(arg % i === 0) {
            return false;
        }
    }
    return arg > 1;
}