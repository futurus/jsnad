'use strict';

const qIO = require('q-io/http');

qIO.read('http://localhost:7000')
  .then((id) => {
    return qIO.read(`http://localhost:7001/${id}`);
  })
  .then((json) => {
    console.log(JSON.parse(json));
  })
  .catch(console.error);
