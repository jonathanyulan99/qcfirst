const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/Course');
router.use(bodyParser.urlencoded({ extended: true}));

console.log("Dropping Courses!");



router.get('/dropcourse').get(function(req,res) {
    Course.find({},function(err,result){
        if(err){
            res.send(err);
        } else{
            res.send(result);
        }
    });
});


// router.get('/', function(req, res) {
//     var users=Course.find.toArray({},(err,docs)=>{
//         console.log('Users are' + users);
//     if(err){
//         throw err;  
//     }else {
//         res.redirect('dropcourses',docs);
//     }
//     });
// });

// router.get('/', function(req, res) {
//     Course.find(function(err, courses){
//       console.log(courses)
//       res.render(
//         'dropcourse',
//         { Schedule : ' My Course Listing', Courses : Courses} 
//       );
//     });
//   });

module.exports = router;