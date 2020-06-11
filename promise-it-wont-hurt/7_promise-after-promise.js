'use strict';

first()
  .then((secret) => {
    return second(secret);
  })
  .then(console.log);
