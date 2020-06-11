'use strict';

const qIO = require('q-io/http');

qIO.read('http://localhost:1337')
  .then((json) => console.log(JSON.parse(json)))
  .catch(console.error);
