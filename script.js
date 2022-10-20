function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let getChoice = choices[Math.floor(Math.random() * choices.length)];
  return getChoice;
}

function getPlayerChoice() {
  const playerSelection = prompt('rock, paper or scissors?');
  return playerSelection;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ) {
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (computerSelection == 'rock' && playerSelection == 'scissors') ||
    (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')
  ) {
    console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log(`${playerSelection} & ${computerSelection}, it's a tie!`);
  }
}

playRound(playerSelection, computerSelection);
