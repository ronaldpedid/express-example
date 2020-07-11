const express = require('express');
const app = express();
const PORT = 3000;
const utility = require('./utility');

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello Class!');
});

app.get('/add/:a/:b', (req, res) => {
  let a = utility.convertToNumber(req.params.a);
  let b = utility.convertToNumber(req.params.b);
  let sum = a + b;
  res.send(`${sum}`);
});