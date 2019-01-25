const User = require('../../models/User.js');
const contactSchema = require('../../schemas/ContactSchema.js');

module.exports = function(app) {

  //Creates User
  app.post('/auth/create', (req,res) => {
    let user = new User({ email: req.body.email, password: req.body.password });
    user.save(function (err, user) {
      if (err) {
        res.send(err);
      } else {
        // Set cookie with JWT token

        res.send(user);
      }
    });
  });

  //Login User
  app.post('/auth/login', (req,res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err || !user) {
        res.send({error: 'Username or password incorrect'});
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
