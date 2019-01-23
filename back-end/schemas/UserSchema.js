const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contactSchema = require('./ContactSchema.js')

module.exports = new Schema({
  first       :   {type: String, required: 'FirstNameInvalid'},
  last        :   {type: String, required: 'LastNameInvalid'},
  email       :   {type: String, unique: true, lowercase: true, required: 'EmailInvalid'},
  password    :   {type: String, select: false, required: 'PasswordInvalid'},
  contacts    :   [contactSchema]
});
