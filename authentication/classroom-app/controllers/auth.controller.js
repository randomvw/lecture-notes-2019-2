const User = require('../db').User;
const passport = require('passport');

exports.registerPage = (req, res) => {
  res.render('register-login', { action: 'register', buttonText: 'Register' });
};

exports.registerUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.register(username, password, (error, registeredUser) => {
    if (error) {
      console.log(error.message);
      return res.status(500).send();
    }

    res.send("Created user: " + username);
  });
};

exports.loginPage = (req, res) => {
  res.render('register-login', { action: 'login', buttonText: 'Login' });
}

exports.loginUser = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });

exports.logoutUser = (req, res) => {
  req.logout(); // logout is provided by passport
  res.redirect('/login');
};

exports.isLoggedIn = (req, res, next) => {
  // If the request is authenticated then pass to the next middleware or controller.
  // isAuthenticated is provided by passport.
  if (req.isAuthenticated()) {
    return next();
  }
  // Otherwise redirect the inauthenticated user to the login page.
  res.redirect('/login');
}
