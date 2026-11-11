// Get reference to Rock, Paper, and Scissors buttons
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

// Get references to resultsContainer, and all elements within
const resultsContainer = document.getElementById("results-container");
const displayUserChoice = document.getElementById("displayUserChoice");
const displayCPUChoice = document.getElementById("displayCPUChoice");
const displayResult = document.getElementById("displayResult")
const playerTracker = document.getElementById("player-tracker");
const cpuTracker = document.getElementById("cpu-tracker");

// Create variables to track wins
let userWins = 0;
let cpuWins = 0;
let isFinished = false;

// ----------------------------------------------------------------------------

function getUserInput(event){
    if(event.target.id === "rockBtn") {return "rock";}
    else if(event.target.id === "paperBtn") {return "paper";}
    else if(event.target.id === "scissorsBtn") {return "scissors";}
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