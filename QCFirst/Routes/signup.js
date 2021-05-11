const express = require('express');
const router = express.Router();
const auth = require("../controllers/AuthController");


// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Comment = require('../models/Comment');

// console.log("Hello:)");

// router.get('/', function(req, res) {
//     Comment.find(function(err, comments){
//       console.log(comments)
//       res.render(
//         'signup2',
//         { title : 'My funky form', comments : comments} 
//       );
//     });
//   });

// router.post('/', function(req, res) {
//     console.log("Up" + req.body.comment);

//     new Comment( { title : req.body.comment } )
//     .save(function(err, comment) {
//       console.log(comment)
//       res.redirect('signup2');
//     });
//   });

// module.exports = router;