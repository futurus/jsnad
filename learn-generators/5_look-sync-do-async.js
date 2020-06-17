'use strict';

var fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go(err, result) {
    if (err) it.throw(err);
    it.next(result);
  }

  it.next(); // or go();
}

run(function* (done) {
  let firstFile;
  // catch exception
  try {
    var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  } catch (e) {
    firstFile = null;
  }
  console.log(firstFile);
});
