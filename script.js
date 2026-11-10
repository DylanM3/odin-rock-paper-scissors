function getComputerChoice() {
    let randNum = Math.random();
    
    if (randNum <= 0.33333) {
        return "Rock";
    }
    else if (randNum >= 0.66666) {
        return "Paper";
    }
    else { return "Scissors"; }     
}

function getHumanChoice() {
    let humanChoice = prompt("Your Choice: ");

    switch(humanChoice.toLowerCase()) {
        case "rock": return "Rock";
        case "paper": return "Paper";
        case "scissors": return "Scissors";
        default: return "userInputError";
    }
}

function computeResults(humanChoice, cpuChoice) {
    if (humanChoice === cpuChoice) {
        return "tie"
    }
    else if (humanChoice === "Rock" && cpuChoice === "Scissors") {
        return "win"
    }
    else if (humanChoice === "Rock" && cpuChoice === "Paper") {
        return "lose"
    }
    else if (humanChoice === "Paper" && cpuChoice === "Rock") {
        return "win"
    }
    else if (humanChoice === "Paper" && cpuChoice === "Scissors") {
        return "lose"
    }
    else if (humanChoice === "Scissors" && cpuChoice === "Paper") {
        return "win"
    }
    else if (humanChoice === "Scissors" && cpuChoice === "Rock") {
        return "lose"
    }
}

function playRound() {
    const cpuChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`You Said: ${humanChoice}`);
    console.log(`Our CPU Said: ${cpuChoice}`);

    const results = computeResults(humanChoice, cpuChoice)

    if (results === "win") {
        console.log("You Won!")
    }
    else if (results === "lose") {
        console.log("You lost.")
    }
    else if (results === "tie") {
        console.log("You tied.")
    }
}

playRound()