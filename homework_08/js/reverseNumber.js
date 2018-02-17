function reverseNumber(arg){
    let reverseArg = arg.toString();
    reverseArg = reverseArg.split('');
    reverseArg = reverseArg.reverse();
    if(reverseArg[reverseArg.length-1]==='-'){
        reverseArg.pop();
        reverseArg = Number(reverseArg.join(''));
        return -Math.abs(reverseArg);
    } else {
        reverseArg = reverseArg.join('');
        return Number(reverseArg);
    }
}