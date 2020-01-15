const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
// Selecting all the 9 cells
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("displayBoard");

let circleTurn;

function startGame() {
  circleTurn = false;
  //Condition added for each cell
  cellElements.forEach(cell => {
    cell.addEventListener("click", handleClick, {
      once: true
    });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  swapTurns();
  setBoardHoverClass();
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
    board.classList.add(CIRCLE_CLASS);
  } else {
  }
  board.classList.add(X_CLASS);
}
startGame();
