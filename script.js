// console.log('hello');

function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
    // returns values [1-3] both inclusive by random
    // math.floor gives only before decimal number
}

function getUserChoice() {
    const choice = Number(
        prompt(`Enter your choice: \n1.rock\t2.paper\t3.scissor`),
    );
    // You can also use +(), and parseInt() to convert string into number
    return choice;
}

// let computerChoice = getComputerChoice();
// let userChoice = getUserChoice();

let humanScore = 0;
let computerScore = 0;

// console.log(
//     `Computer Choice: ${computerChoice == 1 ? 'rock' : computerChoice == 2 ? 'paper' : 'scissor'} x Your Choice: ${userChoice == 1 ? 'rock' : userChoice == 2 ? 'paper' : 'scissor'}`,
// );

function playRound(computerSelection, userSelection) {
    if (
        (computerSelection == 1 && userSelection == 1) ||
        (computerSelection == 2 && userSelection == 2) ||
        (computerSelection == 3 && userSelection == 3)
    ) {
        // console.log('draw');
    } else if (
        (computerSelection == 1 && userSelection == 2) ||
        (computerSelection == 2 && userSelection == 3) ||
        (computerSelection == 3 && userSelection == 1)
    ) {
        // console.log('you win');
        humanScore++;
    } else if (
        (computerSelection == 1 && userSelection == 3) ||
        (computerSelection == 3 && userSelection == 2) ||
        (computerSelection == 2 && userSelection == 1)
    ) {
        // console.log('computer win');
        computerScore++;
    }
}

// playRound(computerChoice, userChoice);

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        playRound(computerChoice, userChoice);
        console.log(
            `Computer: ${computerChoice == 1 ? 'rock' : computerChoice == 2 ? 'paper' : 'scissor'} x Your: ${userChoice == 1 ? 'rock' : userChoice == 2 ? 'paper' : 'scissor'} \tScore: C${computerScore} U${humanScore}`,
        );
        // console.log(`Current Score: C${computerScore} U${humanScore}`);
    }
}
playGame();
console.log(
    `${humanScore > computerScore ? 'User wins' : humanScore == computerScore ? 'Draw' : 'Computer Wins'}`,
);
