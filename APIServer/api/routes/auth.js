const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    if ( username === 'user' && password === 'pass' ) {
      return done(null, {username: 'user', password: 'pass', message: 'Fake user logged in!'});
    }

    return done(null, false); 
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.status(200).json({
      message: 'Authenticated'
    })
});

module.exports = router
