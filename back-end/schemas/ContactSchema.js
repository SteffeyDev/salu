const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema({
  first       :   {type: String, required: 'FirstNameInvalid'},
  last        :   {type: String, required: 'LastNameInvalid'},
  email       :   String,
  phone       :   String,
  street      :   String,
  city        :   String,
  state       :   {type: String, uppercase: true},
  zipcode     :   String,
  label       :   [String],
  notes       :   String
})
