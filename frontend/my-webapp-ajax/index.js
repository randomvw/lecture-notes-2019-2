const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/calculate', (req, res) => {
  let prices = req.body.prices;
  let sum = prices.reduce((accum, current) => accum + current);
  let responseObj = { sum };

  res.json(responseObj);
});

app.listen(3000, () => {
  console.log('My app now listening on port 3000');
});
