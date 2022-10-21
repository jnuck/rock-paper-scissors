function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

function getPlayerChoice() {
  let playerSelection = prompt('rock, paper or scissors?');
  return playerSelection;
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function getResult(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Tie';
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

function playRound(playerSelection, computerSelection) {
  let result = getResult();
  if ((result = 'Tie')) {
    console.log(`${playerSelection} & ${computerSelection}, it's a tie!`);
  } else if ((result = 'Player')) {
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
  } else {
    console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
  }
}

playRound(playerSelection, computerSelection);
