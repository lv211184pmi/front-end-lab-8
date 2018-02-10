// declare variables just for showing input values in console
let ASide = prompt("please enter side A length:", "");
let BSide = prompt("please enter side B length:", "");
let CSide = prompt("please enter side C length:", "");
// transform variables for countings
let sideA = Number(ASide);
let sideB = Number(BSide);
let sideC = Number(CSide);
let triangleType, trianglePerimetr, triangleSquare;

if(!isNaN(sideA && sideB && sideC) && (sideA && sideB && sideC) > 0) {
    if(sideA == sideB && sideA == sideC && sideC == sideB) {
        triangleType = "Equilateral";
    } else if((Math.pow(sideA, 2) == (Math.pow(sideB, 2) + Math.pow(sideC, 2))) || 
              (Math.pow(sideB, 2) == (Math.pow(sideA, 2) + Math.pow(sideC, 2))) || 
              (Math.pow(sideC, 2) == (Math.pow(sideB, 2) + Math.pow(sideA, 2)))) {
        triangleType = "Right triangle";
    } else if(sideA == sideB || sideA == sideC || sideC == sideB) {
        triangleType = "Isosceles";
    } else {
        triangleType = "Scalene";
    }
    trianglePerimetr = (sideA + sideB + sideC)/2;
    triangleSquare =  Math.sqrt(trianglePerimetr*(trianglePerimetr - sideA)*(trianglePerimetr - sideB )*(trianglePerimetr - sideC)).toFixed(2);
    if (!isNaN(triangleSquare) && triangleSquare != 0) {
        console.log(`For data ${ASide} ${BSide} ${CSide}: Type of triangle is ${triangleType} and square is ${triangleSquare}`);
    } else {
        console.log(`For data ${ASide} ${BSide} ${CSide}: Incorrect data`);
    }
} else {
    console.log(`For data ${ASide} ${BSide} ${CSide}: Incorrect data`);
}