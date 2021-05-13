const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Course = require('../models/Course');
const searchController = require('../controllers/searchController');


router.post('/', function(req, res, next){
    const courseid = req.body.courseidform;
    console.log(courseid);
    Course.find().where('courseid').in(courseid).exec((err, courses) => {
        console.log(courses)
        res.render('searchresults', {
          user: req.user,
          Courses: courses
        });
      })
    });

module.exports = router;