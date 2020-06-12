'use strict';

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, fileContent) => {
    if (err) res.sendStatus(500);
    let json;
    try {
      json = JSON.parse(fileContent);
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(json);
  });
});

app.listen(process.argv[2]);
