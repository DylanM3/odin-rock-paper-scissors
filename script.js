// Get reference to Rock, Paper, and Scissors buttons
// Player Buttons:
const usrRockBtn = document.getElementById("usrRockBtn");
const usrPaperBtn = document.getElementById("usrPaperBtn");
const usrScissorsBtn = document.getElementById("usrScissorsBtn");
// CPU Buttons:
const cpuRockBtn = document.getElementById("cpuRockBtn");
const cpuPaperBtn = document.getElementById("cpuPaperBtn");
const cpuScissorsBtn = document.getElementById("cpuScissorsBtn");
// Button Containers:
const usrButtonContainer = document.getElementById("usr-btn-container");
const cpuButtonContainer = document.getElementById("cpu-btn-container");

// ----------------------------------------------------------------------------

function getUserInput(event){
    if(event.target.id === "usrRockBtn") {
        event.target.style.backgroundImage = `url("images/greenIcons/rock.svg")`;
        return "rock";
    }
    else if(event.target.id === "usrPaperBtn") {
        event.target.style.backgroundImage = `url("images/greenIcons/paper.svg")`;
        return "paper";
    }
    else if(event.target.id === "usrScissorsBtn") {
        event.target.style.backgroundImage = `url("images/greenIcons/scissors.svg")`;
        return "scissors";
    }
    else {return "logicError";}
}

// ----------------------------------------------------------------------------

function getComputerChoice(){
    let randNum = Math.random();

    if (randNum < 1/3) {
        cpuRockBtn.style.backgroundImage = `url("images/redIcons/rock.svg")`;
        return "rock";
    }
    else if (randNum > 2/3) {
        cpuPaperBtn.style.backgroundImage = `url("images/redIcons/paper.svg")`;
        return "paper";
    }
    else {
        cpuScissorsBtn.style.backgroundImage = `url("images/redIcons/scissors.svg")`;
        return "scissors"
    }
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
        usrButtonContainer.style.backgroundColor = `rgb(255 215 0 / 0.5)`;
        usrButtonContainer.style.border =  `6px solid rgb(255 215 0)`;
    } else {
        cpuButtonContainer.style.backgroundColor = `rgb(255 215 0 / 0.5)`;
        cpuButtonContainer.style.border =  `6px solid rgb(255 215 0)`;
    }
}

// ----------------------------------------------------------------------------

function disableButtons() {
    usrRockBtn.disabled = true;
    usrPaperBtn.disabled = true;
    usrPaperBtn.disabled = true;
}

function resetGame() {
    usrRockBtn.disabled = false;
    usrPaperBtn.disabled = false;
    usrPaperBtn.disabled = false;
    usrRockBtn.style.backgroundImage = `url("images/whiteIcons/rock.svg")`;
    usrPaperBtn.style.backgroundImage = `url("images/whiteIcons/paper.svg")`;
    usrScissorsBtn.style.backgroundImage = `url("images/whiteIcons/scissors.svg")`;
    cpuRockBtn.style.backgroundImage = `url("images/whiteIcons/rock.svg")`;
    cpuPaperBtn.style.backgroundImage = `url("images/whiteIcons/paper.svg")`;
    cpuScissorsBtn.style.backgroundImage = `url("images/whiteIcons/scissors.svg")`;

}

async function playRound(event) {
    const userChoice = getUserInput(event);
    disableButtons();

    // Pauses for one second before the CPU makes its choice
    await new Promise(r => setTimeout(r, 1000));
    const cpuChoice = getComputerChoice();

    // Pauses for one second before the results are calculated for suspense
    await new Promise(r => setTimeout(r, 1000));
    const result = computeResults(userChoice, cpuChoice);

    // TEMPORARY: Pauses for half a second before the CPU makes its choice
    await new Promise(r => setTimeout(r, 3000));
    resetButtons()
}


// ----------------------------------------------------------------------------

usrRockBtn.addEventListener("click", playRound);
usrPaperBtn.addEventListener("click", playRound);
usrScissorsBtn.addEventListener("click", playRound);