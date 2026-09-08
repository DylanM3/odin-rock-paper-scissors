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

const cpuChoice = getComputerChoice();
console.log(cpuChoice);

const humanChoice = getHumanChoice();
console.log(humanChoice);
