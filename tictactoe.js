const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn; //If true : circle's turn, if not X's

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const winningMessageElement = document.getElementById('winningMessage');

const restartButton = document.getElementById('restartButton')

startGame();

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, {once: true})
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e){
  const cell = e.target;
  //If it is circleTurn, return CIRCLE_CLASS, otherwise X_CLASS
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  // Place Mark which takes 2 args, just created
  placeMark(cell, currentClass)

  //Check for win
  if (checkWin(currentClass)){
    endGame(false);
  } else if (isDraw()) {
    //Check for draw
    endGame(true);
  } else {
    //Switch turns
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw){
  if (draw){
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins`
  }
  winningMessageElement.classList.add('show')
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || 
    cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)

  }
}

function checkWin(currentClass){
  //Will loop over all the winning combinations
  return WINNING_COMBINATIONS.some (combination => {
    //For each one of the combinations check if EVERY of the elements in the combination has the same class
    return combination.every(index => {
      //Returns the cells elements of that index (index here = winning combination from the array)
      return cellElements[index].classList.contains(currentClass)
    })
  })
}