const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const { mainModule } = require('process');
const user = require('../QCFirst/Routes/User');
const course = require('../QCFirst/models/Course');
const InitiateMongoServer = require("../QCFirst/config/db");

InitiateMongoServer();

// const mongoURL = 'mongodb+srv://Admin:355project@cluster0.fkohz.mongodb.net/QCFirst?retryWrites=true&w=majority';
// mongoose.connect(mongoURL, {     
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const db = mongoose.connection
// db.once('open', _ => {
//   console.log('Mongoose Database connected:', mongoURL)
// })

// db.on('error', err => {
//   console.error('connection error:', err)
// })


//     console.log('Connected to Mongo Database');
//     const db = client.db('QCFirst');
//     const userCollection = db.collection('User');

// const david = new User ({
//     email: "123@gmail.com",
//     password: "ezpz",
//     firstname: "David",
//     lastname: "A",
//     isInstructor: false,
//     course: [ ]
// })

/*
david.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
})*/

// const nimmo = new User ({
//     email: "123@gmail.com",
//     password: "ezpz2",
//     firstname: "Brandon",
//     lastname: "Nimmo",
//     isInstructor: false,
//     courses: [ ]
// })

/*
nimmo.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
})*/

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/public/HTML/index.html');
});

console.log("Above user");
app.use("/signup", user);
console.log("User info: " + user);

// app.get('/', (req, res) => {
//     console.log("success")
//     db.collection('users').find().toArray()
//     .then(results => {
//         res.render('index.ejs', { user: results })
//         console.log("yes")
//     })
//     .catch();
// });

app.listen(3000, function() {
    console.log("Listening on port 3000");
});

//this makes use of Promises
// MongoClient.connect(mongoURL, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Mongo Database');
//     const db = client.db('QCFirst');
//     const userCollection = db.collection('User');
//     app.use(express.static(path.join(__dirname + '/public')));
//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.use(bodyParser.json());

//     app.get('/', (req, res) => {
//         console.log("success")
//         db.collection('User').find().toArray()
//         .then(results => {
//             res.render('index.ejs', { user: results })
//             console.log("yes")
//         })
//         .catch();
//     });

//     app.put('/', (req, res) => {
//         console.log(req.body)
//     });

//     app.post('/signup', (req, res) => {
//         userCollection.insertOne(req.body)
//         .then(result => {
//             res.redirect('/')
//         })
//         .catch(error => console.error(error));
//     });

//     app.listen(3000, function() {
//         console.log("Listening on port 3000");
//     });

//   })
//   .catch(error => console.error(error));


// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + '/public/HTML/index.html');
//     console.log('worked');
// });

// app.get('/signup', (req, res, next) => {
//     res.sendFile(__dirname + '/signup.html');
//     console.log('success');
// });

// app.post('/signup', (req, res) => {
//     console.log(req.body.firstname);
//     console.log(req.body.lastname);
//     console.log(req.body.email);
//     console.log(req.body.password);
//     console.log('Hellooooooooooooooooo!');
//   })

// app.listen(3000, function() {
//     console.log("Listening on port 3000");
// });






















// ORIGINAL CODE BELOW

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();


// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// var mongo = require("mongo");
// const mongoose = require('mongoose');
// const { compile } = require('pug');
// const { Db } = require('mongodb');
// const { dirname } = require('path');

// app.use(express.static(path.join(__dirname + '/public')));
// console.log();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// const mongoURL = 'mongodb+srv://Admin:355project@cluster0.fkohz.mongodb.net/QCFirst?retryWrites=true&w=majority'

// mongoose.connect(mongoURL, (err) => {
//     console.log('mongo db connection');
// });

// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + '/HTML/index.html');
// });

// console.log(__dirname)


// const User = mongoose.model('User', {
//     firstname: String,
//     lastname: String,
//     email: String,
//     password: String
// });


// const userSchema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     email: String,
//     password: String
//  });

// const User = mongoose.model("User", userSchema);

// Below user model works.
// const User = mongoose.model('User', {
//     email: String,
//     password: String
// } )

// var UserCollection = mongoose.model('User');

// const user = new User({
//     firstname: "David",
//     lastname: "A",
//     email: "e@gmail.com",
//     password: "123"
// });



// app.get('/signup.html', function(req, res, next) {
//     res.sendFile(__dirname + '/signup.html');
// });

// app.get('/signuppage', function(req, res) {
//     const User = mongoose.model("User", userSchema);
//     console.log(User);

//     const firstname = req.body.firstname;
//     const lastname = req.body.lastname;
//     const email = req.body.email;
//     const password = req.body.password;
//     console.log(firstname);

//     const user = new User({
//         firstname: "David",
//         lastname: "A",
//         email: "e@gmail.com",
//         password: "123"
//     });
//     console.log(user);
//     console.log(user.firstname);

//     Db.User.insert(User);
    
//     // user.save(function(err, user) {
//     //     res.send("Saved " + user._id)
//     // })
// });


//This is how I grabbed the info from the browser.  Check loginpage.html 
//to see what changes need to be made in that file as well.
// app.post('/loginpage', function(req, res) {
//     // const user = new User(req.body);
//     const email = req.body.email;
//     console.log(email);

//     // user.save((err) => {
//     //     if(err){
//     //         sendStatus(500);
//     //     }
//     //     users.push(req.body);
//     //     res.sendStatus(200);
//     // })

//     // if()
//     // const email = req.body.email;
//     // const pass = req.body.password
//     // console.log(email);
//     // console.log(pass);
// });


// var server = http.listen(3000, () => {
//     console.log('Server is listening on port', server.address().port);
// });


// // app.param("username", function(req, res, next, username) {
// //     if () {
// //         req.user = {};
// //     } 
// //     else {
// //         req.user = { };
// //     }
// //     next();
// //  });
 
// //  app.get("/users/:username", function(req, res) {
// //     res.send("<h1>Profile for " + req.user.name + "</h1>");
// //  });