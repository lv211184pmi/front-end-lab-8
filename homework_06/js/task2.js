const EURcourse = 33.8565;
const USDcourse = 27.4609;
// no modifications just for output in console
let amountEUR = prompt("please enter euro amount:", "EUR");
let amountUSD = prompt("please enter usd amount:", "USD");

let EURAmount = Number(amountEUR);
let USDAmount = Number(amountUSD);
let EURtoUAH, USDtoUAH, crossCourse;

if(!isNaN(EURAmount && USDAmount) && (EURAmount && USDAmount) > 0) {
    EURtoUAH = (EURAmount * EURcourse).toFixed(2);
    USDtoUAH = (USDAmount * USDcourse).toFixed(2);
    crossCourse = (EURcourse/USDcourse).toFixed(2);
    console.log(`For data: EUR:${amountEUR}  USD:${amountUSD} 
                ${amountEUR} euros are equal to ${EURtoUAH}UAH, ${amountUSD} dollars are equal to ${USDtoUAH}UAH
                1 EUR is equal ${crossCourse} dollars`);
} else {
    console.log(`For data ${amountEUR} ${amountUSD}: incorrect data`);
}