const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('../models/User').schema;

const courseSchema = new Schema({
    courseID: Number,
    courseName: String,
    semester: String,
    dept: String,
    instructorName: String,
    description: String,
    currentCapacity: Number,
    maxCapacity: Number,
    daysOfWeek: [ String ],
    classTime: Date,
    courseStartDate: Date,
    enrollmentDeadline: Date,
    roster: [ {type: Schema.Types.ObjectId, ref: 'User'} ],
    room: String,
    status: Boolean,
    credits: Number
});

// module.exports = Course = mongoose.model('courses', courseSchema);
module.exports = mongoose.model('courses', courseSchema);