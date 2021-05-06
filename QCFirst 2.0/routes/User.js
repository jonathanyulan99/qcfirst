const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require('../models/User');
const course = require('../models/Course');

console.log("Working!")

router.get('/signup', (req, res) => {
    res.send('reseeeeee');
});


// router.post('',
//     // [
//     //     check("firstname", "Please enter a first name"),
//     //     check("lastname", "Please enter a last name"),
//     //     check("email", "Please enter an email"),
//     //     check("type", "Please make a selection"),
//     //     check("password", "Please enter a valid password, min length 6").isLength({
//     //         min: 6
//     //     })
//     // ],

//     async (res, req, next) => {
//         const error = validationResult(req);
//         if(!error.isEmpty()){
//             return res.status(400).json({
//                 error: error.array()
//             });
//         }

//         //capture the info from the signup form

//         // const firstname = req.body.firstname;
//         // const lastname = req.body.lastname;
//         // const email = req.body.email;
//         // const role = req.body.type;
//         // const password = req.body.password;
//         // console.log("damn");
//         // console.log("User: " + firstname);

//         // const {
//         //     email,
//         //     firstname,
//         //     lastname,
//         //     password,
//         //     type
//         // } = req.body;

//         console.log("here forever");
//         console.log(req.body);

//         try {
//             let user = await User.findOne( { email });
//             console.log("user here: " + user);
//             //check if the user is in the db already
//             if(user){
//                 return res.status(400).json({
//                     message: "User exists in db"
//                 });
//             }

//             //otherwise, create the user and add them to the db

//             user = new User({
//                 email,
//                 firstname,
//                 lastname,
//                 password,
//                 type
//             });
            
//             // user = new User({
//             //     email: email,
//             //     firstname: firstname,
//             //     lastname: lastname,
//             //     password: password,
//             //     isInstructor: type,
//             //     course: []
//             // });

//             console.log("User info: " + user);

//             //hash the password before saving to db

//             const salt = await bcrypt.genSalt(12);
//             user.password = await bcrypt.hash(password, salt);

//             //now save to db
//             await user.save();

//             const payload = {
//                 user: {
//                     id: user.id
//                 }
//             };

//             jwt.sign(
//                 payload,
//                 "randomString", {
//                     expiresIn: 10000
//                 },
//                 (err, token) => {
//                     if(err) throw err;
//                     res.status(200).json({
//                         token
//                     });
//                 }
//             );
//         } catch (err) {
//             console.log(err.message);
//         }
//     }
// );

module.exports = router;