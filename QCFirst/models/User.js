const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = require('../models/Course').schema;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String,
    isInstructor: Boolean,
    course: [ {type: Schema.Types.ObjectId, ref: 'Course'} ]
});

module.exports = User = mongoose.model('User', userSchema);