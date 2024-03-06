function coinFlipGame() {

let coinFlip;
let numLoop = parseInt(prompt("Enter the number of flips."))


for (let i = 0; i < numLoop; i++) {

    coinFlip = Math.round(Math.random());
        if (coinFlip === 0) { 
            console.log("Heads");
            } else {
                console.log("Tails");
            }
        } 

    }
        
coinFlipGame();