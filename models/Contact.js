const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ContactSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false,
    unique: true
  },
  img: {
    type: String,
    required: false
  },
  userID: String
});

module.exports = Contact = mongoose.model('contact', ContactSchema);
