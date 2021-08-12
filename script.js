//Create function 'computerPlay'
function computerPlay() {
  //Generate random number between 1-3
  let computerChoice = Math.floor((Math.random() * 3) + 1);
  //If 1 return 'rock'
  if (computerChoice === 1) {
   return 'rock';
  }
  //If 2 return 'paper'
  else if (computerChoice === 2) {
    return 'paper';
  }
  //If 3 return 'scissors'
  else if (computerChoice === 3) {
    return 'scissors';
  }
}

//Create function 'playRound', playRound has 2 parameters (playerSelection, computerSelection)
function playRound(playerSelection, computerSelection) {
  
  if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection === 'rock') {
      return 'It\'s a Tie!';
    } else if (computerSelection === 'paper') {
      return 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'scissors') {
      return 'You Win! Rock beats Scissors';
    }
  }

  else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'rock') {
      return 'You Win! Paper beats Rock';
    } else if (computerSelection === 'paper') {
      return 'It\'s a Tie!';
    } else if (computerSelection === 'scissors') {
      return 'You Lose! Scissors beats Paper';
    }
  }

  else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'paper') {
      return 'You Win! Scissors beats Paper';
    } else if (computerSelection === 'scissors') {
      return 'It\'s a Tie!'
    }
  }
}

const playerSelection = prompt('What\'s your choice?');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));