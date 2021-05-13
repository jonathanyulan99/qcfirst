const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const course = require('../models/Course').schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    courseid: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Course' } ],
    isInstructor: Boolean
})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', userSchema);