let getTransformedArray = (inputArray, inputFunction) => {
    let transformArray = [];
    forEach(inputArray, item => {
      transformArray.push(inputFunction(item));
    });
    return transformArray;
}