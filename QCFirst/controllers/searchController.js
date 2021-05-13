const mongoose = require('mongoose');
const Course = require('../models/Course');

exports.searchlist = function(req, res, next) {
  const courseid = req.body.courseidform;
  console.log(courseid);
  Course.find().where('_id').in(courseid).exec((err, courses) => {
    console.log(courses);
    // console.log(courses[1]);
    // console.log(courses[1].get("coursename"));
  })
};