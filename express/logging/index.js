const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res, next) => {
  res.send('Welcome to my server with logs');
})

app.listen(3000, () => console.log('listening on port 3000'));