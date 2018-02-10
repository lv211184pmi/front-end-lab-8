let startChoice = confirm("Do you want to play a game?");
if(startChoice) {
    let attempts = 3,
        numRange = 5,
        totalSum = 0,
        attemptRate = 10,
        currentRate = 10;
    while(attempts != 0) {
        let numToGuess = (Math.random()*numRange).toFixed();
        let userNumber = prompt(`Enter a number from 0 to ${numRange}
        Attempts left: ${attempts}
        Total prize ${totalSum} 
        possible Prize on current attempt: ${currentRate}`);
        if(numToGuess == userNumber) {
            totalSum += currentRate;
            attemptRate *= 3;
            currentRate = attemptRate;
            numRange *= 2; 
            let userChoice = confirm("Do you want to continue?");
            if(userChoice) {
                attempts = 3;
            } else {
                console.log(`Thank you for a game. Your prize is: ${totalSum}`);
                userChoice = confirm("Do you want to play again?");
                if(userChoice){ 
                    totalSum = 0;
                    currentRate = 10; 
                    attemptRate = 10;
                } else {
                    break;
                }
            }
        } else if(numToGuess != userNumber && attempts != 0) {
            currentRate = parseInt(currentRate/2);
            userChoice = confirm("Do you want to play again?");
            if(userChoice){
                attempts--;
            } else {
                console.log(`Thank you for a game. Your prize is: ${totalSum}`);
                break;
            }
        } else {
            break;
        }
    }
    if(attempts == 0) {
        console.log(`Thank you for a game. Your prize is: ${totalSum}`);
        userChoice = confirm("Do you want to play again?");
        if(userChoice){
            attempts = 3;
        }
    }
} else {
    console.log("You did not become a millionaire");
}