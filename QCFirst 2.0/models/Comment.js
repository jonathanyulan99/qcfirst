const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    title : String,
});

module.exports = mongoose.model('comments', Comment);