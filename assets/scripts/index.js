'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

const authEvents = require('./auth/events.js');

const gameFile = require('./game.js');
// const handlersJQ = require('./handlers.js');


// On document ready
$(() => {
  authEvents.addHandlers();
  gameFile.boardPaint();
  // handlersJQ.addHandlers();
});
