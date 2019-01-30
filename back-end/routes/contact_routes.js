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

  function match(field, search) {
    return field && search && field.toLowerCase().indexOf(search) > -1;
  }

  //Get all contacts
  app.get('/contacts', (req,res) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {

        // /contacts?search="<search>"
        const search = req.query.search;
        if (search && search.length) {
          const s = search.toLowerCase();
          res.send(user.contacts.filter(contact =>
            match(contact.first, s) ||
            match(contact.last, s) ||
            match(contact.email, s) ||
            match(contact.phone, s) ||
            match(contact.street, s) ||
            match(contact.city, s) ||
            match(contact.state, s) ||
            match(contact.zipcode, s) ||
            match(contact.notes, s) ||
            contact.tags.filter(tag => match(tag, s)).length > 0));
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
