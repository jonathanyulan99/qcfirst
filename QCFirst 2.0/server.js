const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { mainModule, allowedNodeEnvironmentFlags } = require('process');
const Course = require('./models/Course');
const signup = require('./routes/signup');
const dropcourse = require('./routes/dropcourse');
const InitiateMongoServer = require("../QCFirst 2.0/database");

InitiateMongoServer();

//===============EXPRESS================

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//===============ROUTES=================
app.get('/addorEdit', (req,res,next) => {
    res.render('addorEdit')
});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/index', (req, res, next) => {
    res.render('index');
});

app.get('/HTML/instructorhomepage.html', (req, res, next) => {
    res.render('instructorhomepage');
})

app.get('/instructorhomepage', (req, res, next) => {
    res.render('instructorhomepage');
})


app.get('/addcourse', (req,res,next) => {
    res.render('addcourse')
})

app.get('/HTML/addcourse.html', (req,res,next) => {
    res.render('addcourse')
})

app.get('/createcourse', (req,res,next) => {
    res.render('createcourse')
})

app.get('/HTML/createcourse.html', (req,res,next) => {
    res.render('createcourse')
})

app.get('/deletecourse', (req,res,next) => {
    res.render('deletecourse')
})

app.get('/HTML/deletecourse.html', (req,res,next) => {
    res.render('deletecourse')
})

app.get('/dropcourse', (req,res,next) => {
    res.render('dropcourse')
})

app.get('/HTML/dropcourse.html', (req,res,next) => {
    res.render('dropcourse')
})

app.get('/enrollment', (req,res,next) => {
    res.render('enrollment')
})

app.get('/HTML/enrollment.html', (req,res,next) => {
    res.render('enrollment')
})

app.get('/loginpage', (req,res,next) => {
    res.render('loginpage')
})

app.get('/HTML/loginpage.html', (req,res,next) => {
    res.render('loginpage')
})

app.get('/managecourse', (req,res,next) => {
    res.render('managecourse')
})

app.get('/HTML/managecourse.html', (req,res,next) => {
    res.render('managecourse')
})

app.get('/searchresults', (req,res,next) => {
    res.render('searchresults')
})

app.get('/HTML/searchresults.html', (req,res,next) => {
    res.render('searchresults')
})

app.get('/signup', (req,res,next) => {
    res.render('signup')
})

app.get('/HTML/signup.html', (req,res,next) => {
    res.render('signup')
})

//---Routes to Dynamically Get Content -- 
app.use('/signup', signup);
app.use('/create', signup);
app.use('/dropcourse', dropcourse); 

app.listen(3000, function() {
    console.log("Listening on port 3000");
});