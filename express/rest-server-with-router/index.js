const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(3000, () => {
  console.log('Now listening on port 3000');
});
