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
    humanChoice.toLowerCase()
    
    if (humanChoice == "rock") {
        return "Rock"
    }
    else if (humanChoice == "paper") {
        return "Paper"
    }
    else if (humanChoice == "scissors") {
        return "Scissors"
    }
    else { return "userInputError" }
}

function computeResults(humanChoice, cpuChoice) {
    if (humanChoice == cpuChoice) {
        return "tie"
    }
    else if (humanChoice == "Rock" && cpuChoice == "Scissors") {
        return "win"
    }
    else if (humanChoice == "Rock" && cpuChoice == "Paper") {
        return "lose"
    }
    else if (humanChoice == "Paper" && cpuChoice == "Rock") {
        return "win"
    }
    else if (humanChoice == "Paper" && cpuChoice == "Scissors") {
        return "lose"
    }
    else if (humanChoice == "Scissors" && cpuChoice == "Paper") {
        return "win"
    }
    else if (humanChoice == "Scissors" && cpuChoice == "Rock") {
        return "lose"
    }
}

function playRound() {
    const cpuChoice = getComputerChoice();
    console.log(cpuChoice);

    const humanChoice = getHumanChoice();
    console.log(humanChoice);

    const results = computeResults(humanChoice, cpuChoice)

    if (results == "win") {
        console.log("You Won!")
    }
    else if (results == "lose") {
        console.log("You lost.")
    }
    else if (results == "tie") {
        console.log("You tied.")
    }
}

playRound()