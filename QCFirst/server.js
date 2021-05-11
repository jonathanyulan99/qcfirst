const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const { mainModule } = require('process');

const User = require('./models/User');
const InitiateMongoServer = require("./config/db");
InitiateMongoServer();

app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({secret: 'lgm355', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.set('view engine', 'pug');

//===============PASSPORT=================
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user){
        done(err, user);
    });
});

//to sign users up
passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true 
    },

    function(req, email, password, done) {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        process.nextTick(function() {
            User.findOne( { email: email }, function(err, user) {
                if (err)
                return done(err);
                
                if (user) {
                    return done(null, false);
                } 
                else {
                    var newUser = new User();
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    newUser.firstname = firstname;
                    newUser.lastname = lastname;
                    newUser.isInstructor = false;
                    newUser.courses = [];
                    
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });    
        });
    }));

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/index', 
    failureRedirect : '/error'
}));

//To log in users
passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true 
    },

    function(req, email, password, done) { 
        User.findOne({ 'email': email }, function(err, user) {
            if (err)
                return done(err);
            if (!user)
                return done(null, false);
            if (!user.validPassword(password))
                return done(null, false);
            return done(null, user);
    });
}));

app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/index',
    failureRedirect : '/login'
}));

//===============EXPRESS================

app.use(function(req, res, next){
    const err = req.session.error;
    const msg = req.session.notice;
    const success = req.session.success;
  
    delete req.session.error;
    delete req.session.success;
    delete req.session.notice;
  
    if (err) res.locals.error = err;
    if (msg) res.locals.notice = msg;
    if (success) res.locals.success = success;
  
    next();
  });

//===============ROUTES=================

app.get('/', (req, res) => {
    res.render('index', {
        user : req.user
    });
});

app.get('/index', (req, res) => {
    res.render('index', {
        user : req.user
        });
    });

app.get('/login', function(req, res) {
    res.render('login'); 
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile', {
    user : req.user
    });
});

app.get('/enrollment', isLoggedIn, function(req, res) {
    res.render('enrollment', {
        user : req.user
    });
});

app.get('/addcourse', isLoggedIn, function(req, res) {
    res.render('addcourse', {
        user : req.user
    });
});

app.get('/searchresults', isLoggedIn, function(req, res) {
    res.render('searchresults', {
        user : req.user
    });
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// app.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/error'
// }));

// app.post('/login', passport.authenticate('local-login',{
//     successRedirect : '/index',
//     failureRedirect : '/error'
// }));

function isLoggedIn(req, res, next){
    if (req.isAuthenticated())
        return next();
    else
        res.redirect('index');
}


//===============PORT=================

app.listen(3000, function() {
    console.log("Listening on port 3000");
});