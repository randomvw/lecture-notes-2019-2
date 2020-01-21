const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded());
app.use(routes);

app.listen(3000, () => {
  console.log('Calculator app listening on port 3000');
});