const User = require('../../models/User.js');
const config = require('../../config.js');
const jwt = require('jsonwebtoken');

module.exports = function(app, passport) {

  function sendJwt(user, res) {
    jwt.sign({
      user
    }, config.jwt.secret, config.jwt.options, (err, token) => {
      if (err) return res.status(500).json(err);

      // Send the Set-Cookie header with the jwt to the client
      res.cookie('jwt', token, config.jwt.cookie);

      // Response json with the jwt
      return res.json(user);
    });
  }

  //Creates User
  app.post('/auth/create', (req,res) => {
    if (!req.body.email || !req.body.username || !req.body.password)
      return res.status(400).send();

    let user = new User(req.body);
    user.save(function (err, user) {
      if (err) {
        res.status(400).send(err);
      } else {
        sendJwt({ email: user.email, username: user.username }, res)
      }
    });
  });

  //Login User
  app.post('/auth/login', passport.authenticate('local', { session: false }), (req,res) => {
    sendJwt(req.user, res);
  });

  //Logout User
  app.post('/auth/logout', (req,res) => {
    res.clearCookie('jwt');
    res.status(200).send();
  });

};
