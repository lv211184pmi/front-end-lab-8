let decypherPhrase = (inputObj, inputStr) => {
    let reverseValues = Object.keys(inputObj);
    let reverseKeys = Object.values(inputObj);
    let reversedObj = {};
    forEach(reverseKeys, (key) => {
        let index = reverseKeys.indexOf(key);
        reversedObj[key] = reverseValues[index];
    });
    return cypherPhrase(reversedObj, inputStr);
}