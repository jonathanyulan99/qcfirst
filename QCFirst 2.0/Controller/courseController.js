const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
res.render("student/addOrEdit",{
viewTitle: "Insert Student Information"
});
});

router.post('/', (req,res)=> {
console.log(req.body)
})


module.exports = router;






// //course controller is meant to fetch all the courses from the database:
// exports.getCourseOverview = catchAsync(async (req,res,next) => {
//     const courses = await Course.find();

//     res.status(200).render('/dropcourse', {
//         title: 'All Courses',
//         courses 
//     });
// });