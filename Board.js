class Board {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.board = [null, null, null, null, null, null, null, null, null];
      this.boardElement = document.createElement("div");
      this.boardElement.id = "board";
      this.board.forEach((square, index) => {
        const squareElement = document.createElement("button");
        squareElement.addEventListener("click", () => this.handleSquareClick(index))
        this.boardElement.append(squareElement);
      });

      document.body.replaceChildren(this.boardElement);
    });
  }

  handleSquareClick(index) {

    if (this.board[index] === null) {
      if (this.currentPlayer === "O") {
        this.board[index] = "O";



        this.boardElement.children[index].textContent = "O";
        this.currentPlayer = "X";

        var isWon = this.isWon;
        isWon(board, index);

      } else {
        this.board[index] = "X";
        this.boardElement.children[index].textContent = "X";

        this.currentPlayer = "O";
      }
    }
  }

  //declaring winner needs to be fixed

  isWon(board, index) {

    var winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];

    const arrX = { board, ...index };
    const arrO = { board, ...index };

    for (const comb of winComb) {
      console.log("hellyeah")
      const [a, b, c] = comb;
      console.log("hell")
      if (arrX[a] === 'X' && arrX[b] === 'X' && arrX[c] === 'X') {
        console.log("x won")
        return true;
      }
    }

  }

}




const gameBoard = new Board();
