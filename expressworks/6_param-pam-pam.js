'use strict';

const crypto = require('crypto');
const express = require('express');

const app = express();

app.put('/message/:id', (req, res) => {
  res.send(
    crypto.createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')
  );
});

app.listen(process.argv[2]);

