const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const mongoURL = 'mongodb+srv://Admin:355project@cluster0.fkohz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

io.on('connection', (socket) => {
    console.log("connected");
});

mongoose.connect(mongoURL, { useUnifiedTopology: true }, { useNewUrlParser: true }, (err) => {
    console.log('mongo db connection');
});

// const User = mongoose.model('User', {
//     firstname: String,
//     lastname: String,
//     email: String,
//     password: String
// });

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
 });

 const User = mongoose.model("User", userSchema);

// Below user model works.
// const User = mongoose.model('User', {
//     email: String,
//     password: String
// } )

app.get('/signup.html', function(req, res, next) {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/signuppage', function(req, res) {
    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // const email = req.body.email;
    // const pass = req.body.password;
    console.log(firstname);

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    });
    console.log(user);
    
    user.save(function(err, user) {
        res.send("Saved " + user._id)
    })
});

app.get('/index.html', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

//This is how I grabbed the info from the browser.  Check loginpage.html 
//to see what changes need to be made in that file as well.
app.post('/loginpage', function(req, res) {
    // const user = new User(req.body);
    const email = req.body.email;
    console.log(email);

    // user.save((err) => {
    //     if(err){
    //         sendStatus(500);
    //     }
    //     users.push(req.body);
    //     res.sendStatus(200);
    // })

    // if()
    // const email = req.body.email;
    // const pass = req.body.password
    // console.log(email);
    // console.log(pass);
});


var server = http.listen(3000, () => {
    console.log('Server is listening on port', server.address().port);
});



// app.param("username", function(req, res, next, username) {
//     if () {
//         req.user = {};
//     } 
//     else {
//         req.user = { };
//     }
//     next();
//  });
 
//  app.get("/users/:username", function(req, res) {
//     res.send("<h1>Profile for " + req.user.name + "</h1>");
//  });