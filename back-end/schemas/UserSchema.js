const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contactSchema = require('./ContactSchema.js')

module.exports = new Schema({
  username    :   {type: String, unique: true, required: 'Username is Required'},
  email       :   {type: String, unique: true, lowercase: true, required: 'Email is Required'},
  password    :   {type: String, select: false, required: 'Password is Required'},
  contacts    :   [contactSchema]
});
