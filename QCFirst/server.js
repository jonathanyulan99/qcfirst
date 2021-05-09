// const express = require('express');
// const bodyParser= require('body-parser');
// const logger = require('morgan');
// const path = require('path');
// const methodOverride = require('method-override');
// const session = require('express-session');
// const passport = require('passport');
// const favicon = require('serve-favicon');
// const cookieParser = require('cookie-parser');
// const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
// const { mainModule } = require('process');

// const config = require('./config/properties');
// // const helperfunction = require('./config/helperfunctions');
// const app = express();
// mongoose.Promise = global.Promise;
// mongoose.connect(config.mongoURL, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// })
//   .then(() =>  console.log('Mongoose DB: connection succesful'))
//   .catch((err) => console.error(err));

// const index = require('./routes/index');
// const users = require('./routes/users');

// app.set('views', path.join(__dirname, 'views')); 
// app.use(express.static(path.join(__dirname + '/public')));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(require('express-session')({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);


// const User = require('./models/User');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;



const express = require('express');
const bodyParser= require('body-parser');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { mainModule } = require('process');

const config = require('./config/properties');
const helperfunction = require('./config/helperfunctions');

const app = express();

//===============PASSPORT=================
passport.serializeUser(function(user, done) {
    console.log("serializing " + user.firstname);
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    console.log("deserializing " + obj);
    done(null, obj);
  });


//to sign users up
passport.use('local-signup', new LocalStrategy(
    {passReqToCallback : true},
    function(req, username, password, done) {
        helperfunction.localReg(username, password)
        .then(function (user) {
            if (user) {
                console.log("All signed up: " + user.username);
                req.session.success = 'Successfully registered and logged in ' + user.username + '!';
                done(null, user);
            }
            if (!user) {
                console.log("Failed, could not register user");
                req.session.error = 'Email already in use, try a different email to continue.'; 
                done(null, user);
            }
        })
        .fail(function (err){
            console.log(err.body);
        });
    }
));

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    req.session.error = 'Please sign in!';
    res.redirect('index');
}

//===============EXPRESS================

app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('combined'));
// app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    const err = req.session.error,
        msg = req.session.notice,
        success = req.session.success;
  
    delete req.session.error;
    delete req.session.success;
    delete req.session.notice;
  
    if (err) res.locals.error = err;
    if (msg) res.locals.notice = msg;
    if (success) res.locals.success = success;
  
    next();
  });

app.set('view engine', 'pug');


//===============ROUTES=================
// const signup = require('./routes/signup');

app.get('/', (req, res) => {
    res.render('index', {user: req.user});
});

app.get('/index', (req, res) => {
    res.render('index', {user: req.user});
});

app.get('/signup2', function(req, res){
    res.render('signup2');
});

app.post('/local-reg', passport.authenticate('local-signup'), function(req, res) {
    res.redirect('/index');
});

app.get('/logout', function(req, res){
    console.log("LOGGIN OUT")
    req.logout();
    res.redirect('/');
    req.session.notice = "You have successfully been logged out!";
});

// app.use('/signup', signup);
// app.use('/create', signup);


//===============PORT=================

app.listen(3000, function() {
    console.log("Listening on port 3000");
});