function getMin(...args) {
    let minEl = arguments[0];
    for(i=0; i < arguments.length; i++) {
        (minEl<arguments[i]) ? minEl : minEl=arguments[i]; 
    }
    return minEl;
}