'use strict';

const alwaysThrow = () => Promise.reject(new Error('OH NOES'));

const iterate = (num) => {
  console.log(num);
  return num + 1;
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrow)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch((err) => {
    console.log(err.message);
  });
