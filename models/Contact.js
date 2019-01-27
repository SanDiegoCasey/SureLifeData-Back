const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  userID: String
});

module.exports = Contact = mongoose.model('contact', ContactSchema);