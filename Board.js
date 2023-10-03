class Board {
  
  constructor() {
    
    document.addEventListener("DOMContentLoaded", () => {
      
      this.board = [null, null, null, null, null, null, null, null, null];
      this.boardElement = document.createElement("div");
      this.boardElement.id = "board";
      
      this.currentPlayer = "X"; 
      this.gameOver = false; 
      
      this.board.forEach((square, index) => {
        const squareElement = document.createElement("button");
        squareElement.addEventListener("click", () =>
          this.handleSquareClick(index)
        );
        this.boardElement.append(squareElement);
      });

      document.body.replaceChildren(this.boardElement);
      
    });
  }

  handleSquareClick(index) {
    if (!this.gameOver && this.board[index] === null) {
      if (this.currentPlayer === "O") {
        this.board[index] = "O";
        this.boardElement.children[index].textContent = "O";
      } else {
        this.board[index] = "X";
        this.boardElement.children[index].textContent = "X";
      }
      
      if (this.isWon(this.board, this.currentPlayer)) {
        this.gameWon();
      } else if (this.isDrawn(this.board)) {
        this.gameDrawn();
      } else {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"; // Toggle currentPlayer
      }
    }
  }

  isDrawn(board) {
    return board.every(square => square !== null);
  }

  isWon(board, currentPlayer) {
    const winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (const comb of winComb) {
      const [a, b, c] = comb;
      if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
        return true;
      }
    }

    return false;
  }

  gameWon() {
    this.gameOver = true;
    let winMsg = this.currentPlayer + " WON THE GAME!";

    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay-container');

    const winMessageDiv = document.createElement('div');
    winMessageDiv.textContent = winMsg;
    winMessageDiv.classList.add('win-message');

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.classList.add('restart-button');

    restartButton.addEventListener('click', () => {
      window.location.reload();
      document.body.removeChild(overlayContainer);
    });

    overlayContainer.appendChild(winMessageDiv);
    overlayContainer.appendChild(restartButton);

    document.body.appendChild(overlayContainer);

    console.log(winMsg);

    return winMsg;
  }

  gameDrawn() {
    this.gameOver = true;
    let drawMsg = "The game is drawn!";

    const overlayContainer = document.createElement('div');
    overlayContainer.classList.add('overlay-container');

    const drawMessageDiv = document.createElement('div');
    drawMessageDiv.textContent = drawMsg;
    drawMessageDiv.classList.add('draw-message');

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.classList.add('restart-button');

    restartButton.addEventListener('click', () => {
      window.location.reload();
      document.body.removeChild(overlayContainer);
    });

    overlayContainer.appendChild(drawMessageDiv);
    overlayContainer.appendChild(restartButton);

    document.body.appendChild(overlayContainer);

    console.log(drawMsg);

    return drawMsg;
  }
}

const gameBoard = new Board();
