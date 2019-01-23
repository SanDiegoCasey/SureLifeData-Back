const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const PolicySchema = new Schema({
  company: {
    type: String,
    required: true
  },
  typeofins: {
    type: String,
    required: true
  },
  policynum: {
    type: String,
    required: true
  },
  contactnum: {
    type: String,
    required: true
  },
  dollarvalue: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userID: String
});

module.exports = Policy = mongoose.model('policy', PolicySchema);
