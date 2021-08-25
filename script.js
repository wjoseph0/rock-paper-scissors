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
      computerScore++;
      return 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'scissors') {
      playerScore++;
      return 'You Win! Rock beats Scissors';
    }
  }

  else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++;
      return 'You Win! Paper beats Rock';
    } else if (computerSelection === 'paper') {
      return 'It\'s a Tie!';
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'You Lose! Scissors beats Paper';
    }
  }

  else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection === 'rock') {
      computerScore++;
      return 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'paper') {
      playerScore++;
      return 'You Win! Scissors beats Paper';
    } else if (computerSelection === 'scissors') {
      return 'It\'s a Tie!'
    }
  }
}

function game() {
  const resultsContainer = document.querySelector('#resultsContainer');

  const roundResults = document.createElement('div');
  const scoreResults = document.createElement('div');

  const playerSelectionButtons = document.querySelectorAll('.playerSelectionButtons');

  playerSelectionButtons.forEach((button) => {
  
    button.addEventListener('click', () => {
      let playerSelection = button.value;
      let computerSelection = computerPlay();

      roundResults.textContent = playRound(playerSelection, computerSelection);
      scoreResults.textContent = 'Player Score: ' + playerScore + ' Computer Score: ' + computerScore;

      resultsContainer.appendChild(roundResults);
      resultsContainer.appendChild(scoreResults);


      if (playerScore === 5 || computerScore === 5) {

        if (playerScore > computerScore) {
          return alert('CONGRATS, YOU BEAT THE COMPUTER!');
        } else if (computerScore > playerScore) {
            return alert('You lost against the computer :(');
          } else {
              return alert('The game ended in a tie...')
            }
      }
    });
  });



}

//global score variables
let playerScore = 0;
let computerScore = 0;

game();