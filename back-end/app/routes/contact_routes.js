const User = require('../../models/User.js');

module.exports = function(app, passport) {

  app.use(/\/contacts.*/, passport.authenticate('jwt', { session: false }));

  //Searches by ID
  app.get('/contacts/:id', (req,res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      const contact = user.contacts.id(req.params.id);
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(contact);
      }
    });
  });

  //Gets all contacts that match query
  app.get('/contacts', (req, res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      const searchQuery = req.body;
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(user.contacts.find(searchQuery));
      }
    });
  });

  //Get all contacts
  app.get('/contacts', (req,res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(user.contacts.find(req.body));
      }
    });
  });

  //Deletes contacts by ID
  app.delete('/contacts/:id', (req,res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      const contact = user.contacts.id(req.params.id);
      if (err) {
        res.send({'error' : 'An error has occurred'});
      } else {
        user.contacts.deleteOne(contact);

        user.save(err => {
          if (err) res.status(400).send({error: err});
          else res.send(contact + ' has been removed.');
        });
      }
    });
  });

  //Searches by ID and updates contact with the new info
  app.put('/contacts/:id', (req, res) => {
    User.findOne({ email: req.user.email}, (err, user) => {
      const contact = user.contacts.id(req.params.id);
      if (err) {
        res.send({'error' : 'An error has occurred'});
      } else {
        user.contacts.update(contact, req.body);
        var newContact = user.contacts[0];

        user.save(err => {
          if (err) res.status(400).send({error: err});
          else res.send(newContact)
        });
      }
    });
  });

  //Inserts new document into collection
  app.post('/contacts', (req, res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (err || !user) {
        res.send({'error' : 'An error has occurred'});
      } else {
        user.contacts.push(req.body);
        var contact = user.contacts[0];

        user.save(err => {
          if (err) res.status(400).send({error: err});
          else res.send(contact)
        });
      }
    });
  });

};
