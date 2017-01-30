[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# browser-template
https://github.com/skylarkJ/browser-template
I have used this template for starting front-end project. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Dependencies
Then I installed dependencies $npm install. $npm install

## Installation
I downloaded it on my computer unzipped it and created a local repository for the project. The file README.md should have my own content. In the terminal I have pointed to the project repository and $ git init - to change it to the repo for gitHub.

## Structure
I worked only in assets and a spec folder.
[`assets/scripts/index.js`] - default I haven't touched
[`assets/scripts/game.js`] - my code
[`assets/styles/index.scss`]
[`assets/scripts/config.js`] - I set production and development pathes - API URLs. With apiOrigins set I have been using then config.apiOrign as the base for API
[`assets/scripts/auth/`] - api.js (worked with that),events.js(worked with that), ui.js(didn't use it)
[getFormFields] - I didn't need to touch this file but it's for retrieving form data to send to an API.

## Development Itself
A started with wireframe of what my game project should look like.
https://goo.gl/photos/QaAZUKXRLb7NMYw46

A code on GitHub
https://github.com/skylarkJ/tic-tac-toe/tree/feature

A life version
https://skylarkj.github.io/tic-tac-toe/

List of Technologies Used:
html5, css3, sass, bootstrap, JavaScript,  jQuery, json, ajax

I started with breaking tasks at Trello board into "to do" "doing" "done" categories. Before the modeling of game I needed some visual layout to break the abstraction. I used bootstrap for responsive layout with navigation, jumbotron section and the modal feature for login buttons. I also styled a little different the forms.

Then I dived into a modeling of the game to realize what needs to happen to have the game fully functional. The most important part I got from it that I don't need to treat the board as a grid 3x3 rather as an array of 9 positions which can be in one row. So to target one position I don't need a number of a row and a column. What we are seeing with an eye the computer doesn't care - it just declares as a line of numbers from 0 to 8. Also, I needed to take a tile as an empty placeholder and work with it for the conditions for winning between to players this way.

The next I moved to js bin to create in their js file some pseudocode and started the logical code. I don't like to work with Atom editor at the beginning of the process because popping out errors are disrupting me. I have several errors when I migrated my code from js bin to atom but it was a worthy lesson to trouble shoot it. At the end of the day I was proud that I have finished it.

For my code I created game.js:
1. I created couple of global variables to be able to access them from the scope of any function.
2. Then I made 3 arrays - one for each player and one for a board itself to catch the state before turn and after turn - I gave to an initial state 0 if the place was picked then 1.
3. To check for a winner - it went two ways - one in the javaScript - the function is called checkForWinner and other for the server - the function is called checksServerWin. The interesting part is on the server that I am accessing the places in the arrays with json property called cells. To not mess around with results in javaScript I am using own local arrays for each player for the server check. I am looping through both arrays in the same time while storing through if statements for each player the marks at their own array placeholder. This stores each turns for both players but then I had to check for winning combo. I used for it another for loop and ran it through the global array of winningCombinations. [i] is the index of which combination is currently being checked. [0] checking just a slot in the combination and seeing if its filled in serverX. 







## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
