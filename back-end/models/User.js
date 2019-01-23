const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const personSchema = require('../schemas/ContactSchema.js');

personSchema.pre('save', function(next) {
  var person = this;
  if (!person.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(person.password, salt, function(err, hash) {
      person.password = hash;
      next();
    });
  });
});

personSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

module.exports = mongoose.model('Person', personSchema);
