'use strict';

//Create a board
let playerX = "X";
let playerO = "O";
let playerXWinMoves;
let playerOWinMoves;
let playerXResults;
let playerOResults;
let winMessage = "You won.";
let currentPlayer = playerX;
let turn = 0;
let content = [];

//Empty state of the game
let boardPlayerX = [0,0,0,0,0,0,0,0,0];
let boardPlayerO = [0,0,0,0,0,0,0,0,0];
let boardPainted = [0,0,0,0,0,0,0,0,0];

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

//player turn
$('.box').on('click', function(){
  let boardPosition = $(this).attr('id')[2]; //third position of each id of tile
    boardPainted[boardPosition] = currentPlayer;
    if (currentPlayer === playerX) {
       currentPlayer = playerO;
    } else {
       currentPlayer = playerX;
      }
    boardPaint();
});




// boardPaint();
//
// //Winning combo
// let winningCombinations = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8],
//   [6,4,2]
// ];
//
// //Player switching
// if (currentPlayer === playerX) {
//   return playerX;
// } else {
//   return playerO;
//   }
//
// //Check if the playerX has the slots filled based on one of the winning condition
// const checkForWinner = function (playerX, playerO) {
//   if (playerX === content[winningCombinations[0]] ||
//           content[winningCombinations[1]] ||
//           content[winningCombinations[2]] ||
//           content[winningCombinations[3]] ||
//           content[winningCombinations[4]] ||
//           content[winningCombinations[5]] ||
//           content[winningCombinations[6]] ||
//           content[winningCombinations[7]] ||
//           content[winningCombinations[8]]) {
//
//     console.log(playerXWinMoves=playerXWinMoves += playerXWinMoves);
//     console.log(winMessage);
//   } else {
//     console.log(playerOWinMoves=playerOWinMoves += playerOWinMoves);
//     }
//
//     return playerO;
// };
// checkForWinner();
//
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
