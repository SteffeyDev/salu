const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema({
  first       :   {type: String, required: 'The first name field is required'},
  last        :   {type: String, required: 'the last name field is required'},
  email       :   {type: String, match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i, 'The email must be properly formatted']},
  phone       :   {type: String, match: [/(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/, "The phone number must be in a standard format"] },
  street      :   String,
  city        :   String,
  state       :   {type: String, enum: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY", null]},
  zipcode     :   {type: String, match: [/^\d{5}(-?\d{4})?$/m, 'The zipcode must be 5 digits optionally followed by 4 more']},
  tags        :   { type: [String], maxlength: 10, index: true },
  notes       :   String
})
