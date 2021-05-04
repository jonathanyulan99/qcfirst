const express = require('express');
<<<<<<< Updated upstream
const bodyParser= require('body-parser');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const { mainModule } = require('process');
const User = require('../QCFirst/models/User');
const course = require('../QCFirst/models/Course');

const mongoURL = 'mongodb+srv://Admin:355project@cluster0.fkohz.mongodb.net/QCFirst?retryWrites=true&w=majority';
mongoose.connect(mongoURL, {     
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connection
db.once('open', _ => {
  console.log('Mongoose Database connected:', mongoURL)
})

db.on('error', err => {
  console.error('connection error:', err)
})


//     console.log('Connected to Mongo Database');
//     const db = client.db('QCFirst');
//     const userCollection = db.collection('User');

const david = new User ({
    email: "123@gmail.com",
    password: "ezpz",
    firstname: "David",
    lastname: "A",
    isInstructor: false,
    course: [ ]
})

/*
david.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
})*/

const nimmo = new User ({
    email: "123@gmail.com",
    password: "ezpz2",
    firstname: "Brandon",
    lastname: "Nimmo",
    isInstructor: false,
    courses: [ ]
})

/*
nimmo.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
})*/

// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + '/public/HTML/index.html');
// });

app.get('/', (req, res) => {
    console.log("success")
    db.collection('users').find().toArray()
    .then(results => {
        res.render('index.ejs', { user: results })
        console.log("yes")
    })
    .catch();
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
=======
const bodyParser = require('body-parser');
const path = require('path');
var app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const { compile } = require('pug');
const { truncate } = require('fs');

app.use(express.static(path.join(__dirname , '/public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const mongoURL = 'mongodb+srv://Admin:355project@cluster0.fkohz.mongodb.net/QCFirst?retryWrites=true&w=majority'

mongoose.connect(mongoURL,  { useUnifiedTopology: true, useNewUrlParser: true })
.then((result) => console.log("DB CONNECTED"))
.catch((err) => console.log(err));

/*
mongoose.connect(mongoURL, { useUnifiedTopology: true }, { useNewUrlParser: true }, (err) => {
    console.log('mongo db connection');
>>>>>>> Stashed changes
});
*/

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

<<<<<<< Updated upstream
=======
/*
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
 });*/

 const userSchema = mongoose.Schema({
     password: {
         type:String,
         required:true
     },
     passwordConfirm:{
         type:String,
         required:true
     },
     email: {
         type:String,
         required:true
     },
     firstName: {
         type:String,
         required:true
     },
     role:{
         type: String,
         required:true
     },
     createdAt:{
         type:Date,
         default:Date.now()
     }
 });
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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
=======
/*testing*/
app.get('/', (req,res) => {
    res.json( { message: "API WORKING"});
});

app.get('/signup.html', function(req, res, next) {
    res.sendFile(__dirname + '/signup.html');
    console.log('success');
    next();
});

app.get('/auth', function(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    });
    
    
    user.save(function(err, user) {
        res.send("Saved " + 12345)
    })

    console.log(user);
    console.log(user.firstname);
});
>>>>>>> Stashed changes


//This is how I grabbed the info from the browser.  Check loginpage.html 
//to see what changes need to be made in that file as well.
// app.post('/loginpage', function(req, res) {
//     // const user = new User(req.body);
//     const email = req.body.email;
//     console.log(email);

<<<<<<< Updated upstream
//     // user.save((err) => {
//     //     if(err){
//     //         sendStatus(500);
//     //     }
//     //     users.push(req.body);
//     //     res.sendStatus(200);
//     // })
=======
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.post('/auth', 
        [
            check("firstname", "Please Enter a Valid Firs tName")
            .not()
            .isEmpty(),
            check("lastname", "Please Enter a Valid Last Name") 
            .not()
            .isEmpty(),
            check("email", "Please Enter a Valid Email").isEmail(),
            check("password", "PLease Enter a Valid Password").isLength({min:8}),
            check("password-confirm", "Please Ensure Both Passwords Match").isString(password)
        ],
        async(req,res)=> {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array()
                });
            }

            const {
                username,
                email,
                password
            } = req.body;
            try {
                let user = await User.findOne({
                    email
                });
                if(user){
                    return res.status(400).json({
                        msg: "User Already Exists"
                    });
                }

                user = new User({
                    username,
                    email,
                    password
                });

                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);

                await user.save();
                
                const payload = {
                    user: {
                        id: user.id
                    }
                };

                jwt.sign(
                    payload,
                    "randomString", {
                        expiresIn: 10000
                    }, 
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                            token
                        });
                    }
                );
            } catch(err){
                console.log(err.message);
                res.status(500).send("Error in Saving");
            }
        });

io.on('connection', (socket) => {
    console.log("connected");
});
>>>>>>> Stashed changes

//     // if()
//     // const email = req.body.email;
//     // const pass = req.body.password
//     // console.log(email);
//     // console.log(pass);
// });

<<<<<<< Updated upstream

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
=======
// app.param("username", function(req, res, next, username) {
//     if () {
//         req.user = {};
//     } 
//     else {
//         req.user = { };
//     }
//     next();
//  });
>>>>>>> Stashed changes
 
// //  app.get("/users/:username", function(req, res) {
// //     res.send("<h1>Profile for " + req.user.name + "</h1>");
// //  });