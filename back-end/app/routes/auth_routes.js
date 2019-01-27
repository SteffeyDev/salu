const User = require('../../models/User.js');
const config = require('../../config.js');
const jwt = require('jsonwebtoken');

module.exports = function(app, passport) {

  //Creates User
  app.post('/auth/create', (req,res) => {
    if (!req.body.email || !req.body.username || !req.body.password)
      return res.status(400).send();

    let user = new User(req.body);
    user.save(function (err, user) {
      if (err) {
        res.status(400).send(err);
      } else {
        // Set cookie with JWT token

        res.status(200).send({ email: user.email, username: user.username });
      }
    });
  });

  //Login User
  app.post('/auth/login', passport.authenticate('local', { session: false }), (req,res) => {
    jwt.sign({
      user: req.user
    }, config.jwt.secret, config.jwt.options, (err, token) => {
      if (err) return res.status(500).json(err);

      // Send the Set-Cookie header with the jwt to the client
      res.cookie('jwt', token, config.jwt.cookie);

      // Response json with the jwt
      return res.json({
        jwt: token
      });
    });

  });

  app.post('/auth/logout', (req,res) => {
    // Remove JWT from cookie

    res.status(200).send()
  });

};
