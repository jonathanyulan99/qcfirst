const mongoose = require('mongoose');
const Course = require('../models/Course');
var currentUser = require('../models/User');

// exports.index = function(req, res) {
//   res.render('addcourse')
// }

//for addcourse page to display the user's schedule
exports.courselist = function(req, res, next) {
  const courseIDs = req.user.courseid;
  Course.find().where('_id').in(courseIDs).exec((err, courses) => {
    // console.log(courses);
    // console.log(courses[1]);
    // console.log(courses[1].get("coursename"));
    res.render('addcourse', {
      user: req.user,
      title: 'Course List',
      Courses: courses
    });
  })
};

exports.test = function(req, res){
  console.log("test")
  console.log(req.body)
}
//for dropcourse page to display the user's schedule
exports.dropCourselist = function(req, res, next) {
  const courseIDs = req.user.courseid;
  Course.find().where('_id').in(courseIDs).exec((err, courses) => {
    res.render('dropcourse', {
      user: req.user,
      title: 'Course List',
      Courses: courses
    });
  })
};


//We are going to need something like this for search results
    // exports.courselist = function(req, res, next) {
    //   Course.find()
    //   .populate('courses')
    //   .exec(function (err, courseList) {
    //       if (err) { return next(err); }
    //       res.render('dropCourse', { 
    //         user: req.user,
    //         title: 'Course List', 
    //         Courses: courseList
    //        });
    //     });
    //   };



    //THIS IS THE WORKING CODE FOR NOW:
    // exports.courselist = function(req, res, next) {
    //   const courseIDs = req.user.courseid;
   
    //   Course.find().where('_id').in(courseIDs).exec((err, courses) => {
    //     console.log(courses);
    //     console.log(courses[1]);
    //     console.log(courses[1].get("coursename"));
    //   })
    //  };