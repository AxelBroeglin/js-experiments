let buttons = document.querySelectorAll('.button')

let computerSelection = computerPlay();
let result


function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            computerChoice = 'rock';
          break;  

        case 2:
            computerChoice = 'paper';
          break;

        default:
            computerChoice = 'scissors';
      }
    return computerChoice;
}

let playerSelection = buttons.forEach(button => button.addEventListener('click', (e) => {
    playerSelection = e.target.innerHTML;
    playRound(playerSelection, computerSelection)
  }))



function playRound(playerSelection, computerSelection){
  console.log(playerSelection, computerSelection)
  if (computerSelection === playerSelection) {
    result = 'its a draw!'
  }
  if (computerSelection === 'rock' && playerSelection === "paper") {
    result = 'you win!'
  }
  if (computerSelection === 'rock' && playerSelection === "scissors") {
    result = 'you lost!'
  }
  if (computerSelection === 'paper' && playerSelection === "scissors") {
    result = 'you win!'
  }
  if (computerSelection === 'paper' && playerSelection === "rock") {
    result = 'you lose!'
  }
  if (computerSelection === 'scissors' && playerSelection === "rock") {
    result = 'you win!'
  }
  if (computerSelection === 'scissors' && playerSelection === "paper") {
    result = 'you lose!'
  }
  console.log(result)
}


