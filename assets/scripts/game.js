'use strict';
const api = require('./auth/api');
const store = require('./store');

//Create a board
let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;
let gameId = '';

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


const checksServerWin = function (cells) {
  let serverX = [0,0,0,0,0,0,0,0,0];
  let serverO = [0,0,0,0,0,0,0,0,0];
  for (let i = 0; i < cells.length; i++) {
    if(cells[i] === "x") {
      serverX[i] = 1;
    }
    if(cells[i] === "o") {
      serverO[i] = 1;
    }
  }

  for (let i = 0; i < winningCombinations.length; i++) {
    if (serverX[winningCombinations[i][0]] &&
        serverX[winningCombinations[i][1]] &&
        serverX[winningCombinations[i][2]]) {

       return playerX;
     }

     if (serverO[winningCombinations[i][0]] &&
         serverO[winningCombinations[i][1]] &&
         serverO[winningCombinations[i][2]]) {

       return playerO;
     }

  }

};


const boardPaint = function(){

  let htmlBoard = $('.box');

  for (let i = 0; i < boardPainted.length; i++) {
    if (boardPainted[i] === 0){
     htmlBoard[i].innerHTML = '';
   } else if (boardPainted[i] === playerX) {
      htmlBoard[i].innerHTML = '<img src="http://janaryndin.com/img/x.png" alt="x"/>';
    } else {
      htmlBoard[i].innerHTML = '<img src="http://janaryndin.com/img/o.png" alt="o"/>';
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
};

// if game is over, run function to get statistics
// and turn off board
const gameOver = function () {
  $(".box").off("click");
   $('.game-score').show();
   api.gameStat()
     .then((data) => {
       let addOne = 0;


       for (let i = 0; i < data.games.length; i ++) {
         let win = checksServerWin(data.games[i].cells);
         if (store.user.id === data.games[i].player_x.id) {
           if (win === playerX) {
             addOne += 1;
           }
         }

       }
       $('.game-score').text("Wins: " + addOne);

     });
};



//player turn
const playGame = function(){
  let serverData = {
    game: {over: false},
  };

  let boardPosition = $(this).attr('id')[2]; //third position of each id of tile
  //let actionStop;
  if (boardPainted[boardPosition] === 0) {
    boardPainted[boardPosition] = currentPlayer;
    if (currentPlayer === playerX) {
       currentPlayer = playerO;
       boardPlayerX[boardPosition] = true;
       serverData.game.cell = {
         index:boardPosition,
         value: "x"
       };
    } else {
       currentPlayer = playerX;
       boardPlayerO[boardPosition] = true;
       serverData.game.cell = {
         index:boardPosition,
         value: "o"
       };
     }
    //return actionStop === false;
    boardPaint();
    let winner = checkForWinner();
    if (winner === playerX) {
      $('#won-messagex').show();
      serverData.game.over = true;
    }

    if (winner === playerO) {
      $('#won-messageo').show();
      serverData.game.over  = true;
    }

    //Check for draw
    if (winner === "" && isBoardFull()) {
      $('#draw-message').show();
      serverData.game.over  = true;
    }
    api.gameUpdate(gameId, serverData);

    if (serverData.game.over) {
      gameOver();
    }
  }

};

const resetBoard = function () {
  //Empty state of the game
  currentPlayer = playerX;
  boardPlayerX = [0,0,0,0,0,0,0,0,0];
  boardPlayerO = [0,0,0,0,0,0,0,0,0];
  boardPainted = [0,0,0,0,0,0,0,0,0];

  boardPaint();
};


//reset the board
$('#button-play').on('click', function(){
  api.gameCreate()
    .then((data) => {
      gameId = data.game.id;
        resetBoard();
      $('.box').on('click',playGame);
      $('#won-messagex').hide();
      $('#won-messageo').hide();
      $('#draw-message').hide();
    });

});

$('#create-game').on('click', function () {
  api.gameCreate()

    .then((data) => {
      gameId = data.game.id;
      $( document.activeElement ).css("background-color", "#00e676");
      $( document.activeElement ).css("color", "#fff");
      $('.box').on('click',playGame);
      $('.game-board').show();
      $('#create-game').hide();
    });

});

module.exports = {
  boardPaint
};
