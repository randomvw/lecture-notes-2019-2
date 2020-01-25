require('dotenv').config();
require('./db');
const User = require('./db').User;
const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes');
const passport = require('passport');
const session = require('express-session');

const app = express();

app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log(`Now listening on port 3000`)
});
