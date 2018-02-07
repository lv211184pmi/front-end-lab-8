let CurrencyConvert = (function() {
    let amountEUR = prompt("please enter euro amount:", "EUR");
    let amountUSD = prompt("please enter usd amount:", "USD");
    let EURcourse = 33.8565;
    let USDcourse = 27.4609;

    let validateAmount = (amount) => {
        let numerizeAmount = parseFloat(amount);
        if(!isNaN(numerizeAmount) && numerizeAmount > 0) {
            numerizeAmount = Number(numerizeAmount);
        } else {
            console.log(`your amount is incorrect: ${amount}`);
            numerizeAmount = "incorrect amount";
        }
        return numerizeAmount;
    };

    let convertToEUR = (amountEUR) => {
        let EURtoUAH;
        EURtoUAH = (amountEUR * EURcourse).toFixed(2);
        return EURtoUAH;
    }

    let converTotUSD = (amountUSD) => {
        let USDtoUAH;
        USDtoUAH = (amountUSD * USDcourse).toFixed(2);
        return USDtoUAH;
    }

    let countCrossCourse = (amountUSD, amountEUR) => {
        let crossCourse;
        crossCourse = (amountUSD/amountEUR).toFixed(2);
        return crossCourse;
    }

    let count = () => {
        let EUR = validateAmount(amountEUR);
        let USD = validateAmount(amountUSD);
        if (EUR !== "incorrect amount" && USD !== "incorrect amount") {
            let EURconvert = convertToEUR(EUR);
            let USDconvert = converTotUSD(USD);
            let crossCourseAmount = countCrossCourse(EURcourse, USDcourse);
            console.log(`for data: EUR:${EUR}  USD:${USD} 
                ${EUR} euros are equal to ${EURconvert}UAH
                ${USD} dollars are equal to ${USDconvert}UAH
                1 EUR is equal ${crossCourseAmount} dollars`);
        } else {
            console.log(`incorrect data, check amounts you entered!`);
        }
    }

    return {
        count: count
    }     
})();