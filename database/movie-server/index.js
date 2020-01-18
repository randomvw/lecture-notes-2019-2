require('dotenv').config();
const express = require('express');
const routes = require('./routes/index');

const app = express();
const db = require('./db');

app.use(express.json());

app.use(routes);

const listener = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ` + listener.address().port);
});
