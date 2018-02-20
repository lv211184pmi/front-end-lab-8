let getFilteredArray = (inputArray, predicateFunction) => {
    let filteredArray = [];
    forEach(inputArray, singleElem  => {
        if(predicateFunction(singleElem)){
            filteredArray.push(singleElem);
        }
    });
    return filteredArray;
}