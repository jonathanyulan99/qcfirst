const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require('../models/User');
const { model } = require("mongoose");

console.log("Working!")

router.post('/signup',
    [
        check("firstname", "Please enter a first name"),
        check("lastname", "Please enter a last name"),
        check("email", "Please enter an email"),
        check("type", "Please make a selection"),
        check("password", "Please enter a valid password, min length 6").isLength({
            min: 6
        })
    ],

    async (res, req) => {
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                error: error.array()
            });
        }

        //capture the info from the signup form
        const userfirstname = req.body.firstname;
        const userlastname = req.body.lastname;
        const useremail = req.body.email;
        const userrole = req.body.type;
        const userpassword = req.body.password;

        console.log("User: " + userfirstname);

        try {
            let user = await User.findOne( { email });
            console.log("user here: " + user);
            //check if the user is in the db already
            if(user){
                return res.status(400).json({
                    message: "User exists in db"
                });
            }

            //otherwise, create the user and add them to the db

            user = new User({
                userfirstname, 
                userlastname,
                useremail,
                userrole,
                userpassword
            });

            //hash the password before saving to db

            const salt = await bcrypt.genSalt(12);
            user.userpassword = await bcrypt.hash(userpassword, salt);

            //now save to db
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
                    if(err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error, couldn't save user");
        }
    }
);

module.exports = router;