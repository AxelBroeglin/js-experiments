const playerSelection = 'rock';
const computerSelection = computerPlay();
let result
console.log(playerSelection, computerSelection)

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

function playRound(playerSelection, computerSelection){
    //playerSelection and  computerSelection are undefined in this function for some reason

    console.log(playerSelection, computerSelection)
    if (computerSelection === playerSelection) {
        result = 'its a draw!'
      }
    else{
        result = 'else';
    }
    console.log(result)
}

playRound();