const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// exports.list = async (req, res) => {
//     const peoples = await People.find();
//     res.render('list', { title: 'People', peoples });
//   }

// router.get('/', function(req, res) {
//   console.log(courseList)
//   res.render('addcourse', { title: 'Course', Courses: courseList})
//   // res.render('addcourse', { title: 'People', courses });
// })

router.get('/', courseController.courselist);
// router.post('/', courseController.test);
router.get('/dropcourse', courseController.dropCourselist);

module.exports = router;