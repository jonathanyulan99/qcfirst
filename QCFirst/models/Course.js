const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('../models/User').schema;

const courseSchema = new Schema({
    courseid: Number,
    coursename: String,
    dept: String,
    // description: String,
    // instructorName: String,
    // semester: String,
    // currentCapacity: Number,
    // maxCapacity: Number,
    // roster: [ {type: Schema.Types.ObjectId, ref: 'users'} ],
    // daysOfWeek: [ String ],
    // classTime: Date,
    // courseStartDate: Date,
    // enrollmentDeadline: Date,
    // room: String,
    // status: Boolean,
    // credits: Number
});


// const courseSchema = new Schema({
//     courseID: Number,
//     courseName: String,
//     semester: String,
//     dept: String,
//     instructorName: String,
//     description: String,
//     currentCapacity: Number,
//     maxCapacity: Number,
//     daysOfWeek: [ String ],
//     classTime: Date,
//     courseStartDate: Date,
//     enrollmentDeadline: Date,
//     roster: [ {type: Schema.Types.ObjectId, ref: 'users'} ],
//     room: String,
//     status: Boolean,
//     credits: Number
// });

module.exports = mongoose.model('Course', courseSchema);