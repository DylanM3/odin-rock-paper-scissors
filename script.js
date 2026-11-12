// Get reference to Rock, Paper, and Scissors buttons
// Player Buttons:
const usrRockBtn = document.getElementById("usrRockBtn");
const usrPaperBtn = document.getElementById("usrPaperBtn");
const usrScissorsBtn = document.getElementById("usrScissorsBtn");
// CPU Buttons:
const cpuRockBtn = document.getElementById("cpuRockBtn");
const cpuPaperBtn = document.getElementById("cpuPaperBtn");
const cpuScissorsBtn = document.getElementById("cpuScissorsBtn");

// ----------------------------------------------------------------------------

function getUserInput(event){
    if(event.target.id === "usrRockBtn") {return "rock";}
    else if(event.target.id === "usrPaperBtn") {return "paper";}
    else if(event.target.id === "usrScissorsBtn") {return "scissors";}
    else {return "logicError";}
}

// ----------------------------------------------------------------------------

function getComputerChoice(){
    let randNum = Math.random();

    if (randNum <= 1/3) {
        return "rock";
    }
    else if (randNum > 2/3) {
        return "paper";
    }
    else { return "scissors"; }
}

// ----------------------------------------------------------------------------

function computeResults(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return "It's a tie...";
    }

    // Define what each choice beats
    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    // If the user's choice beats the cpu's choice, the user wins
    if (winningMoves[userChoice] === cpuChoice) {
        userWins++;
        return "You won this round!";
    } else {
        cpuWins++;
        return "You lost this round.";
    }
}

// ----------------------------------------------------------------------------

function checkScore(){
    if(userWins >= 5) {
        return "Congratulations! You won the match!";
    }
    else if(cpuWins >= 5) { // Fixed from cpuTracker to cpuWins
        return "Game Over... the CPU won the match.";
    }
    return null;
}

function playRound(event){
    // If the game was finished, reset scores on the next click to start a new match
    if (isFinished) {
        userWins = 0;
        cpuWins = 0;
        isFinished = false;
    }

    const userChoice = getUserInput(event);
    const cpuChoice = getComputerChoice();
    const result = computeResults(userChoice, cpuChoice);

    displayUserChoice.textContent = `You Picked: ${userChoice}`;
    displayCPUChoice.textContent = `CPU Picked: ${cpuChoice}`;
    displayResult.textContent = result;

    playerTracker.textContent = `Your Wins: ${userWins}`;
    cpuTracker.textContent = `CPU Wins: ${cpuWins}`;

    // Check if someone reached 5 wins
    const matchWinner = checkScore();
    if (matchWinner) {
        isFinished = true;
        displayResult.textContent = `${result} \n ${matchWinner} (Click any button to play again!)`;
    }
}

// ----------------------------------------------------------------------------

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);