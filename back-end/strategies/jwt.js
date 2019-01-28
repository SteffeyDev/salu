const config = require('../config.js');
const User = require('../models/User.js');
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

var cookieExtractor = function(req) {
  return req && req.signedCookies ? req.signedCookies['jwt'] : null;
};

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken(), cookieExtractor]);
opts.secretOrKey = config.jwt.secret;
opts.issuer = config.jwt.options.issuer;
opts.audience = config.jwt.options.audience;

module.exports = new JwtStrategy(opts, function(jwt_payload, done) {
  User.findById(jwt_payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});
