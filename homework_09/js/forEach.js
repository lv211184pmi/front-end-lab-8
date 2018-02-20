let forEach = (inputArray, inputFunction) => {
    for(let i=0; i<inputArray.length; i++) {
        inputFunction(inputArray[i]);
    }
}