const express = require('express');
const routes = require('./routes/index');

const app = express();
const db = require('./db');

app.use(express.json());

app.use(routes);

const listener = app.listen(3000, () => {
  console.log(`Server listening on port ` + listener.address().port);
});
