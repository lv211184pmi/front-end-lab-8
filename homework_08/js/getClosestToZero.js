function getClosestToZero(...args) {
    let minEl = arguments[0];
    for(i=1; i < arguments.length; i++) {
        (Math.abs(minEl)<Math.abs(arguments[i])) ? minEl : minEl=arguments[i]; 
    }
    return minEl;   
}