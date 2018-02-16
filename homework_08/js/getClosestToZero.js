function getClosestToZero(...args) {
    let minEl = Math.abs(arguments[0]);
    for(i=0; i < arguments.length; i++) {
        (minEl<Math.abs(arguments[i])) ? minEl : minEl=Math.abs(arguments[i]); 
    }
    return minEl;   
}