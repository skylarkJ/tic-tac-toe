'use strict';

const success = (data) => {
  if (data) {
  // handle success
  console.log(data);
  $('.message').text('Success!');
  }
};

const failure = (error) => {
  // handle failure
  console.error(error);
  $('.message').text('Error!');
};


const signUpSuccess = function () {
  $('.message').text('Thank you for signing up!');
  $('#modalSignUp').removeClass('.modal');
};

// const signInSuccess = function () {
//   $('.message').text('You are Successfully signed in!');
//   $('#modalSignIn').removeClass('.modal');
// };


// const changePasswordSuccess = function () {
//   $('.message').text('Your password changed!');
//   $('#modalChangePassword').removeClass('.modal');
// };

// const signOutSuccess = function () {
//   $('#button-play').hide();
//   $('.game-board').hide();
//   $('.message').text('You have signed out!');
//   $('#modalSignOut').removeClass('modal');
// };

module.exports = {
  failure,
  success,
  signUpSuccess
  // signInSuccess,
  // changePasswordSuccess
  // signOutSuccess,
};
