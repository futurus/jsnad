'use strict';

const express = require('express');

const app = express();

app.get('/search', (req, res) => {
  res.json(req.query);
});

app.listen(process.argv[2]);

