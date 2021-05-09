const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const config = require('./config/properties')

mongoose.connect(config.mongoURL, { useNewUrlParser: true });