require('dotenv').config();
const express = require('express');
const routes  = require('./routes');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

app.listen(3000, () => {
  console.log('Now listening on port 3000');
})