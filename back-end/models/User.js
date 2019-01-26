const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const personSchema = require('../schemas/UserSchema.js');

personSchema.pre('save', function(next) {
  if (!this.isModified('password'))
    return next();

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      next();
    });
  });
});

personSchema.methods.comparePassword = function(password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

module.exports = mongoose.model('Person', personSchema);
