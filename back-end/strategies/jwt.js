const JwtCookieComboStrategy = require('passport-jwt-cookiecombo');
const config = require('../config.js');

module.export = new JwtCookieComboStrategy({
  secretOrPublicKey: config.jwt.secret,
  jwtVerifyOptions: config.jwt.options,
  passReqToCallback: false
}, (payload, done) => {
  return done(null, payload.user, {});
})
