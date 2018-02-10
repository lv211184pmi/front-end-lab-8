let floors = Number(prompt("Please enter a natural number of floors:"));
let counter = 1;

if(!isNaN(floors) && Number.isInteger(floors)){
    if (floors > 0 && floors <= 20) {
        for(i=1; i <= floors; i++) {
            outString = "   ".repeat(20 - n/2) + "[~]".repeat(n) + "   ".repeat(20 - n/2);
            console.log(outString + "\n");
            counter += 2;
        }
    } else {
        console.log(`Incorrect data!`);
    }
} else {
    console.log(`Incorrect data!`);
}