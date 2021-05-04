const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://Admin:355project@cluster0.fkohz.mongodb.net/QCFirst?retryWrites=true&w=majority';

const InitiateMongoServer = async () => {
    try {
      await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
      console.log("Connected to Mongoose DB");
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  
  module.exports = InitiateMongoServer;