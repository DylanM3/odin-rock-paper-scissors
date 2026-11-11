function getComputerChoice() {
    let randNum = Math.random();

    if (randNum <= 1/3) {
        return "rock";
    }
    else if (randNum > 2/3) {
        return "paper";
    }
    else { return "scissors"; }
}

function computeResults(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return "Its a tie..."
    }
    else if (userChoice === "rock" && cpuChoice === "scissors") {
        return "You won!"
    }
    else if (userChoice === "rock" && cpuChoice === "paper") {
        return "You lost."
    }
    else if (userChoice === "paper" && cpuChoice === "rock") {
        return "You won!"
    }
    else if (userChoice === "paper" && cpuChoice === "scissors") {
        return "You lost."
    }
    else if (userChoice === "scissors" && cpuChoice === "paper") {
        return "You won!"
    }
    else if (userChoice === "scissors" && cpuChoice === "rock") {
        return "You lost."
    }
}

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


function getUserInput(event){
    if(event.target.id === "rockBtn") {return "rock";}
    else if(event.target.id === "paperBtn") {return "paper";}
    else if(event.target.id === "scissorsBtn") {return "scissors";}
    else {return "logicError";}
}


function playRound(event){
    const userChoice = getUserInput(event);
    const cpuChoice = getComputerChoice();
    const result = computeResults(userChoice, cpuChoice)

    displayUserChoice.textContent = `You Picked: ${userChoice}`;
    displayCPUChoice.textContent = `CPU Picked: ${cpuChoice}`;
    displayResult.textContent = result;
}

// Inducts a game upon click
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);