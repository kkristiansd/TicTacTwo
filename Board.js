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
        this.isWon = this.isWon.bind(this);

      });

      document.body.replaceChildren(this.boardElement);

    });
  }

  handleSquareClick(index) {

    if (this.board[index] === null) {

      if (this.currentPlayer === "X") {
        this.board[index] = "X";
        this.boardElement.children[index].textContent = "X";
        
        this.currentPlayer = "O";

        var isWon = this.isWon;
        isWon(board, index);
        this.gameWon(index);

      } else {
        this.board[index] = "O";
        this.boardElement.children[index].textContent = "O";
        
        this.currentPlayer = "X";
        
        var isWon = this.isWon;
        isWon(board, index);
        this.gameWon(index);


      }
    }
  }

  //declaring winner needs to be fixed

  isWon(board, index) {
    const winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];

    const arrX = [...this.board];
    const arrO = [...this.board];

    if (index.player === 'X') {
      arrX[index.index] = 'X';
    } else if (index.player === 'O') {
      arrO[index.index] = 'O';
    }

    for (const comb of winComb) {
      const [a, b, c] = comb;

      if (arrX[a] === 'X' && arrX[b] === 'X' && arrX[c] === 'X') {
        console.log("x won");
        return true;

      } 
      

      if (arrO[a] === 'O' && arrO[b] === 'O' && arrO[c] === 'O') {
        console.log("o won");
        return true;
      }
      
    }

    return false;

  }

  gameWon(){
    let winMsg = (this.currentPlayer + " WON THE GAME!");
    if(this.isWon(this.board,this.currentPlayer)){
      console.log(winMsg);
      return winMsg;
       
    }
  }



}




const gameBoard = new Board();
