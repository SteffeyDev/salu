const User = require('../models/User.js');

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

  //Get all contacts
  app.get('/contacts', (req,res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {

        // /contacts?search="<search>"
        const search = req.query.search;
        if (search && search.length) {
          res.send(user.contacts.filter(contact =>
            contact.first.indexOf(search) > -1 ||
            contact.last.indexOf(search) > -1 ||
            contact.email.indexOf(search) > -1 ||
            contact.phone.indexOf(search) > -1 ||
            contact.street.indexOf(search) > -1 ||
            contact.city.indexOf(search) > -1 ||
            contact.state.indexOf(search) > -1 ||
            contact.zipcode.indexOf(search) > -1 ||
            contact.notes.indexOf(search) > -1 ||
            contact.tags.filter(tag => tag.indexOf(search) > -1).length > 0));
        } else {
          return res.send(user.contacts);
        }
      }
    });
  });

  //Deletes contacts by ID
  app.delete('/contacts/:id', (req,res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (err) {
        res.send({'error' : 'An error has occurred'});
      } else {
        const contact = user.contacts.id(req.params.id).remove();

        user.save(err => {
          if (err) res.status(400).send({error: err});
          else res.send(contact.id + ' has been removed.');
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
        contact.set(req.body);
        user.save(err => {
          if (err) res.status(400).send({error: err});
          else res.send(contact)
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
