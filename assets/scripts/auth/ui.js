'use strict';

const success = (data) => {
  // handle success
  console.log(data);
};

const failure = (err) => {
  // handle failure
  console.error(err);
};

module.exports = {
  failure,
  success,
};
