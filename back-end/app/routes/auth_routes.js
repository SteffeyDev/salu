const User = require('../../models/User.js');
const passport = require("passport");
const jwtStrategry  = require("../../strategies/jwt.js");
passport.use(jwtStrategry);

module.exports = function(app) {

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
  app.post('/auth/login', (req,res) => {
    // Need to select +password specifically, because by default a select will not return the password ({ select: false } in schema)
    User.findOne({ email: req.body.email }, 'email username +password', (err, user) => {
      if (err || !user) {
        res.status(401).send({error: 'Username or password incorrect'});
      } else {
        user.comparePassword(req.body.password, (err, success) => {
          if (success) {
            // Set cookie with JWT token

            res.status(200).send();
          } else {
            res.status(401).send({error: 'Username or password incorrect'})
          }
        });
      }
    });
  });

  app.post('/auth/logout', (req,res) => {
    // Remove JWT from cookie

    res.status(200).send()
  });

};
