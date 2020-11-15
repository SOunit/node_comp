const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('from node! and nodemon! mon!');
});

app.get('/test', (req, res) => {
  res.send('from node! test!');
});

app.listen(5000);
