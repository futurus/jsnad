'use strict';

const all = (p1, p2) => {
  const out = [];

  return new Promise((resolve) => {
    p1.then((val) => {
      out[0] = val;

      if (out[0] && out[1]) {
        resolve(out);
      }
    });

    p2.then((val) => {
      out[1] = val;

      if (out[0] && out[1]) {
        resolve(out);
      }
    });
  });
}


all(getPromise1(), getPromise2())
  .then(console.log);
