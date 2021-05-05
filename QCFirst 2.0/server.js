const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { mainModule } = require('process');

const signup = require('./routes/signup');

const InitiateMongoServer = require("../QCFirst/database");

InitiateMongoServer();


//===============EXPRESS================

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//===============ROUTES=================

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/index', (req, res, next) => {
    res.render('index');
});

app.use('/signup', signup);
app.use('/create', signup);

app.listen(3000, function() {
    console.log("Listening on port 3000");
});