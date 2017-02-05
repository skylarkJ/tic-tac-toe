'use strict';

const success = (data) => {
  // handle success
  console.log(data);
};

const failure = (error) => {
  // handle failure
  console.error(error);
};

$('.sign-up-form').on('submit', function(){
 $('.sign-up').hide();
});

module.exports = {
  failure,
  success,
};
