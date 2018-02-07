let CountTriangle = (function() {
    let sideA = prompt("please enter side A length:", "side A");
    let sideB = prompt("please enter side B length:", "side B");
    let sideC = prompt("please enter side C length:", "side C");
    
    let checkInputValue = (inpValue) => {
        let numerizedValue = parseFloat(inpValue).toFixed(2);
        if(!isNaN(numerizedValue) && numerizedValue > 0) {
            numerizedValue = Number(numerizedValue);
        } else {
            console.log(`you entered wrong side: ${inpValue}`);
            inpValue = "wrong side";
        }
        return numerizedValue;
    };

    let defineTriangleType = (a, b, c) => {
        let triangleType;
        if(a == b && a == b && b == c) {
            triangleType = "Equilateral";
        } else if(a == b || a == c || b ==c) {
            if(rightTriangleCount(a, b, c)) {
                triangleType = "Isosceles and Right triangle";
            } else {
                triangleType = "Isosceles";
            }
        } else {  
            if(rightTriangleCount(a, b, c)) {
                triangleType = "Scalene and Right triangle";
            } else {
                triangleType = "Scalene";
            }   
        }
        return triangleType;
    }

    let rightTriangleCount = (a, b, c) => {
        let sideA = Math.pow(a, 2);
        let sideB = Math.pow(b, 2);
        let sideC = Math.pow(c, 2);
        if((sideA == (sideB + sideC)) || (sideB == (sideA + sideC)) || (sideC == (sideB + sideA))) {
            return "Right triangle";
        }
    }

    let countTriangleSquare = (a, b, c) => {
        let square, perimetr;
        perimetr = (a + b + c);
        square = Math.sqrt(perimetr*(perimetr - a)*(perimetr - b)*(perimetr - c));
        return square;
    }

    let count = () => {
        let ASide = checkInputValue(sideA);
        let BSide = checkInputValue(sideB);
        let CSide = checkInputValue(sideC);
        if (ASide !== "wrong side" && BSide !== "wrong side" && CSide !== "wrong side") {
            let triangleType = defineTriangleType(ASide, BSide, CSide);
            let triangleSquare = countTriangleSquare(ASide, BSide, CSide);
            console.log(`for data:
                ${ASide} ${BSide} ${CSide} 
                type of triangle is:
                ${triangleType}
                and square is: 
                ${triangleSquare}`);
        } else {
            console.log(`incorrect data, check sides length you entered!`);
        }
    }

    return {
        count: count
    }     
})();