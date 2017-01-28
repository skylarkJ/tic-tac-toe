'use strict';

//Create a board
let playerX = "X";
let playerO = "O";
let playerXWinMoves;
let playerOWinMoves;
let playerXWinGames;
let playerOWinGames;
let winMessage = "You won.";
let currentPlayer = playerX;


//Empty state of the game
let boardPlayerX = [0,0,0,0,0,0,0,0,0];
let boardPlayerO = [0,0,0,0,0,0,0,0,0];
let boardPainted = [0,0,0,0,0,0,0,0,0];

//Winning combo
let winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
];

const boardPaint = function(){

  let htmlBoard = $('.box');

  for (let i = 0; i < boardPainted.length; i++) {
    if (boardPainted[i] === 0){
     htmlBoard[i].innerHTML = '';
   } else if (boardPainted[i] === playerX) {
      htmlBoard[i].innerHTML = '<img src="assets/img/x.png" alt="x"/>';
    } else {
      htmlBoard[i].innerHTML = '<img src="assets/img/o.png" alt="o"/>';
    }

  }
};

// //Check if the playerX has the slots filled based on one of the winning condition
const checkForWinner = function () {
  for (let i = 0; i < winningCombinations.length; i++) {
    if (boardPlayerX[winningCombinations[i][0]] &&
        boardPlayerX[winningCombinations[i][1]] &&
        boardPlayerX[winningCombinations[i][2]]
     ) {

       return playerX;
     }

     if (boardPlayerO[winningCombinations[i][0]] &&
         boardPlayerO[winningCombinations[i][1]] &&
         boardPlayerO[winningCombinations[i][2]]) {

       return playerO;
     }

  }
  return "";
};


//to check if board is full for draw
const isBoardFull = function () {
  for (let i = 0; i < boardPainted.length; i++) {
    if (boardPainted[i] === 0) { //board not full because 0
      return false;
    }
  }
  return true;
}

//player turn
$('.box').on('click', function(){


  let boardPosition = $(this).attr('id')[2]; //third position of each id of tile
  if (boardPainted[boardPosition] === 0) {
    boardPainted[boardPosition] = currentPlayer;
    if (currentPlayer === playerX) {
       currentPlayer = playerO;
       boardPlayerX[boardPosition] = true;
    } else {
       currentPlayer = playerX;
       boardPlayerO[boardPosition] = true;
      }
    boardPaint();
    let winner = checkForWinner();
    if (winner === playerX) {
      alert('PlayerX you won.');
    }
    if (winner === playerO) {
      alert('PlayerO you won.');
    }

    //Check for draw
    if (winner === "" && isBoardFull()) {
      alert("The game is a draw.");
    }

  }
});






// //start new game - function
// const playAgain = function () {
//   let confirm = "Play again.";
//   if (confirm === true) {
//     console.log("Yeah, Let's play again.");
//     return content;
//   }
// };
//
// //When no winning combination make content array empty -ready for a new game
// const gameOver = function (content) {
//   for (let i = 0; i < 8; i++) {
//     if (content[winningCombinations[i]] === false) {
//     content = [];
//     }
//   }
//   return playAgain();
// };
// gameOver();
//
//
// //How to store result of each player
// const score = function () {
//   if (playerXWinMoves) {
//     playerXResults = "Your score is " + playerXWinMoves + " winning games";
//   } else {
//     playerOResults = "Your score is " + playerOWinMoves + " winning games";
//   }
// };
// score();


module.exports = {
  boardPaint
};
