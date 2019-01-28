const User = require('../models/User.js');
const LocalStrategy = require('passport-local').Strategy;

module.exports = new LocalStrategy({
  session: false
}, (username, password, done) => {
  // Need to select +password specifically, because by default a select will not return the password ({ select: false } in schema)
  User.findOne({ $or: [{ email: username }, { username }] }, 'email username +password', (err, user) => {
    if (err) return done(err);

    // Copy the user w/o the password into a new object
    if (user) {
      user.comparePassword(password, (err, success) => {
        if (success)
          done(null, { id: user._id, email: user.email, username: user.username });
        else
          done(err);
      });
    }
  });
})
