const playButton = document.getElementById("playButton");

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3 + 1);

    if (randomNum === 1) {
        return "rock";
    }
    if (randomNum === 2) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    const humanInput = prompt("rock, paper or scissors?").toLowerCase();

    if (humanInput !== "rock" && humanInput !== "paper" && humanInput !== "scissors") {
        console.log("You didn't enter a correct choice!!");
        return getHumanChoice();
    }

    return humanInput;
}

function determineWinner(computer, human) {
    if (computer === "rock" && human === "paper") {
        console.log("Human wins!! Paper beats Rock ");
        return "computer";
    }
    if (computer === "paper" && human === "scissors") {
        console.log("Human wins!! Scissors beats paper");
        return "computer";
    }
    if (computer === "scissors" && human === "rock") {
        console.log("Human wins!! Rock beats Scissors");
        return "computer";
    }
    if (computer === "rock" && human === "scissors") {
        console.log("Computer wins!! Rock beats Scissors");
        return "human";
    }
    if (computer === "paper" && human === "rock") {
        console.log("Computer wins!! Paper beats Rock");
        return "human";
    }
    if (computer === "scissors" && human === "paper") {
        console.log("Computer wins!! Scissors beats Paper");
        return "human";
    }
    console.log(`It's a draw!! ${human} and ${computer} is the same`);
    return "draw";
}

function playRound() {
    return determineWinner(getComputerChoice(), getHumanChoice());
}

function playGame() {
    let humanPoints = 0;
    let computerPoints = 0;

    switch (playRound()) {
        case "computer":
            computerPoints++;
            break;
        case "human":
            humanPoints++;
            break;
    }

    switch (playRound()) {
        case "computer":
            computerPoints++;
            break;
        case "human":
            humanPoints++;
            break;
    }

    switch (playRound()) {
        case "computer":
            computerPoints++;
            break;
        case "human":
            humanPoints++;
            break;
    }

    switch (playRound()) {
        case "computer":
            computerPoints++;
            break;
        case "human":
            humanPoints++;
            break;
    }

    switch (playRound()) {
        case "computer":
            computerPoints++;
            break;
        case "human":
            humanPoints++;
            break;
    }

    switch (playRound()) {
        case "computer":
            computerPoints++;
            break;
        case "human":
            humanPoints++;
            break;
    }
}

playButton.addEventListener("click", playGame);
