function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) return "rock";
  if (randomNum === 1) return "paper";
  return "scissors";
}

function playRound(computerChoice, humanChoice) {
  const scoreContainer = document.querySelector(".current-text");

  if (computerChoice === humanChoice) {
    scoreContainer.textContent = `It's a draw!! Both chose ${humanChoice}`;
    return "draw";
  }
  if (
    (computerChoice === "paper" && humanChoice === "scissors")
    || (computerChoice === "rock" && humanChoice === "paper")
    || (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    scoreContainer.textContent = `Human wins!! ${humanChoice} beats ${computerChoice}`;
    return "human";
  }
  scoreContainer.textContent = `Computer wins!! ${computerChoice} beats ${humanChoice}`;
  return "computer";
}

function checkWinner(computerScore, humanScore) {
  const humanScoreSpan = document.querySelector(".human-score");
  const computerScoreSpan = document.querySelector(".computer-score");
  const scoreContainer = document.querySelector(".current-text");

  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;

  if (humanScore === 5) {
    scoreContainer.textContent =
      `Human beats computer!! Human score: ${humanScore}, Computer score: ${computerScore}`;
  }
  if (computerScore === 5) {
    scoreContainer.textContent =
      `Computer beats computer!! Human score: ${humanScore}, Computer score: ${computerScore}`;
  }
}

function startGame() {
  let humanScore = 0;
  let computerScore = 0;

  const rockButton = document.querySelector(".button--rock");
  const paperButton = document.querySelector(".button--paper");
  const scissorsButton = document.querySelector(".button--scissors");

  rockButton.addEventListener("click", () => {
    const result = playRound(getComputerChoice(), "rock");
    if (result === "human") humanScore++;
    if (result === "computer") computerScore++;
    checkWinner(computerScore, humanScore);
  });
  paperButton.addEventListener("click", () => {
    const result = playRound(getComputerChoice(), "paper");
    if (result === "human") humanScore++;
    if (result === "computer") computerScore++;
    checkWinner(computerScore, humanScore);
  });
  scissorsButton.addEventListener("click", () => {
    const result = playRound(getComputerChoice(), "scissors");
    if (result === "human") humanScore++;
    if (result === "computer") computerScore++;
    checkWinner(computerScore, humanScore);
  });
}

startGame();
