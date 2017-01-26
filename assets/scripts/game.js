'use strict';

//Create a board
let playerX = "X";
let playerO = "O";
let playerXWinMoves;
let playerOWinMoves;
let playerXResults;
let playerOResults;
let winMessage = "You won.";
let currentPlayer = playerX - playerO;

let turn = 0;
let content = [];

// oneWinning = ['X','O','0',
//               '0','X','0',
//               '0','O','X'
//              ];

//Player turn
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


const playerTurn = function(){
  if (turn%2 === 0){
   return playerX;
  } else {
    return playerO;
   }
};
playerTurn();


//Player switching
if (currentPlayer === playerX) {
  return playerX;
} else {
  return playerO;
  }

//Check if the playerX has the slots filled based on one of the winning condition
const checkForWinner = function (playerX, playerO) {
  if (playerX === content[winningCombinations[0]] ||
          content[winningCombinations[1]] ||
          content[winningCombinations[2]] ||
          content[winningCombinations[3]] ||
          content[winningCombinations[4]] ||
          content[winningCombinations[5]] ||
          content[winningCombinations[6]] ||
          content[winningCombinations[7]] ||
          content[winningCombinations[8]]) {

    console.log(playerXWinMoves=playerXWinMoves += playerXWinMoves);
    console.log(winMessage);
  } else {
    console.log(playerOWinMoves=playerOWinMoves += playerOWinMoves);
    }

    return playerO;
};
checkForWinner();

//start new game - function
const playAgain = function () {
  let confirm = "Play again.";
  if (confirm === true) {
    console.log("Yeah, Let's play again.");
    return content;
  }
};

//When no winning combination make content array empty -ready for a new game
const gameOver = function (content) {
  //When no winning combination make content array empty
  for (let i = 0; i < 8; i++) {
    if (content[winningCombinations[i]] === false) {
    content = [];
    }
  }
  return playAgain();
};
gameOver();


//How to store result of each player
const score = function () {
  if (playerXWinMoves) {
    playerXResults = "Your score is " + playerXWinMoves + " winning games";
  } else {
    playerOResults = "Your score is " + playerOWinMoves + " winning games";
  }
};
score();


// module.exports = {
//   gameFile,
// };
