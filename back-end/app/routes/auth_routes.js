const User = require('../../models/User.js');

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
    console.log(JSON.stringify(req.body))
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err || !user) {
        res.status(401).send({error: 'Username or password incorrect'});
      } else {
        console.log(user);
        user.comparePassword(req.body.password, (err, success) => {
          console.log(err);
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
