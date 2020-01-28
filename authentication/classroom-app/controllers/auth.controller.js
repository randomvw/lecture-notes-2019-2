const User = require('../db').User;
const passport = require('passport');

exports.registerPage = (req, res) => {
  res.render('register-login', { action: 'register', buttonText: 'Register' });
};

exports.registerUser = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  User.register(username, password, (error, registeredUser) => {
    if (error) {
      console.log(error.message);
      return res.status(500).send();
    }

    req.flash('success', 'Welcome new user ' + username);
    next();
  });
};

exports.loginPage = (req, res) => {
  res.render('register-login', { action: 'login', buttonText: 'Login', flashes: req.flash('error') });
}

exports.loginUser = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,      // Creates flash messages available on the 'error' key. req.flash('error')
  successFlash: 'Welcome!' // Creates flash messages available on the 'success' key. req.flash('success')
});

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

exports.loginGithubCallback = passport.authenticate('github',
  { failureRedirect: '/login', failureFlash: 'Failed to login', successRedirect: '/' });

exports.loginUserGithub = passport.authenticate('github', { scope: ['user:email'] });