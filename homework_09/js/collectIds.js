let collectIds = inputArr => {
    let resultArr = [];
    let filterArr = getFilteredArray(inputArr, item => item.rating > 3);
    getTransformedArray(filterArr, item => resultArr.push(item.id));
    return resultArr;
}