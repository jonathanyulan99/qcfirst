const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/User");

const userController = {};

userController.home = function(req, res) {
  res.render('index', { user : req.user });
};

userController.register = function(req, res) {
  res.render('signup');
};

userController.doRegister = function(req, res) {
  console.log("Helllllloooo")
  User.register(new User({ username : req.body.username, name: req.body.firstname }), req.body.password, function(err, user) {
    if (err) {
      return res.render('signup', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

userController.login = function(req, res) {
  res.render('login');
};

userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;