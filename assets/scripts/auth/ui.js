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
  $('.message').text('Thank you for signing up! Now sign in!').css('color', 'blue');
  $('#modalSignUp').modal('hide');
  $('.message').hide(10000);
};

const signUpError = function () {
  $('.message').text('Error signing up! Try again.').css('color', 'orange');
  $('#modalSignUp').modal('hide');
};

const signInSuccess = function () {
  $('.message').text('You are Successfully signed in!').css('color', 'blue');
  $('.message').hide(10000);
  $('#modalSignIn').modal('hide');
  $('#button-signup-nav').hide();
  $('.style-button-password').show();
  $('.style-button-signout').show();
  $('.create-button').show();
  $('#button-play').show();
};

const signInError = function () {
  $('.message').text('Something went wrong. Sign in again!').css('color', 'orange');
  $('#modalSignIn').modal('hide');
};

const changePasswordSuccess = function () {
  $('.message').text('Your password has changed!').css('color', 'blue');
  $('#modalChangePassword').modal('hide');
  $('.message').hide(10000);
};

const changePasswordError = function () {
  $('.message').text('Change password failed!').css('color', 'orange');
  $('#modalChangePassword').modal('hide');
};

const signOutSuccess = function () {
  $('#button-play').hide();
  $('.game-board').hide();
  $('.message').text('You have signed out!');
  $('#modalSignOut').modal('hide').css('color', 'blue');
  $('.create-button').hide();
  $('.style-button-password').hide();
};

const signOutError = function () {
  $('#button-play').hide();
  $('.game-board').hide();
  $('.message').text('You have signed out!');
  $('#modalSignOut').modal('hide').css('color', 'orange');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
};
