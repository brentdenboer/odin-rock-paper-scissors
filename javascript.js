function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) return "rock";
    if (randomNum === 1) return "paper";
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

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log(`It's a draw!! Both chose ${humanChoice}`);
        return "draw";
    }
    if (
        (computerChoice === "paper" && humanChoice === "scissors") ||
        (computerChoice === "rock" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "scissors")
    ) {
        console.log(`Human wins!! ${humanChoice} beats ${computerChoice}`);
        return "human";
    }
    console.log(`Computer wins!! ${computerChoice} beats ${humanChoice}`);
    return "computer";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Round 1
    console.log("Round 1!");
    const result1 = playRound(getComputerChoice(), getHumanChoice());
    if (result1 === "human") humanScore++;
    if (result1 === "computer") computerScore++;

    // Round 2
    console.log("Round 2!");
    const result2 = playRound(getComputerChoice(), getHumanChoice());
    if (result2 === "human") humanScore++;
    if (result2 === "computer") computerScore++;

    // Round 3
    console.log("Round 3!");
    const result3 = playRound(getComputerChoice(), getHumanChoice());
    if (result3 === "human") humanScore++;
    if (result3 === "computer") computerScore++;

    // Round 4
    console.log("Round 4!");
    const result4 = playRound(getComputerChoice(), getHumanChoice());
    if (result4 === "human") humanScore++;
    if (result4 === "computer") computerScore++;

    // Round 5
    console.log("Round 5!");
    const result5 = playRound(getComputerChoice(), getHumanChoice());
    if (result5 === "human") humanScore++;
    if (result5 === "computer") computerScore++;

    if (humanScore > computerScore) {
        console.log(`Human beats computer!! Human score: ${humanScore}, Computer score: ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`Computer beats computer!! Human score: ${humanScore}, Computer score: ${computerScore}`);
    } else {
        console.log(`Computer beats computer!! Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
}

playGame();
