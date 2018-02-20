let cypherPhrase = (inputObj, inputStr) => {
    let strArray = inputStr.split('');
    let codedArray = getTransformedArray(strArray, symb => {
        return inputObj[symb] || symb;
    });
    return codedArray.join('');
}