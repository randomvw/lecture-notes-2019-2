require('dotenv').config();
require('./db');
const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes');

const app = express();
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log(`Now listening on port 3000`)
});
