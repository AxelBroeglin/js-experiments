const playerSelection = 'rock';
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

}


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