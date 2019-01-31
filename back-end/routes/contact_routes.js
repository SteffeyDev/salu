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
          const s = search.toLowerCase().replace(' ', '');
          res.send(user.contacts.filter(contact =>
            match(contact.first + contact.last, s) ||
            match(contact.last, s) ||
            match(contact.email, s) ||
            match(contact.phone, s) ||
            match(contact.street + contact.city + contact.state + contact.zipcode, s) ||
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

  function fix_contact_fields(contact) {
    if (contact.first)
      contact.first = contact.first.trim();
    if (contact.last)
      contact.last = contact.last.trim();
    if (contact.email)
      contact.email = contact.email.trim();
    if (contact.phone)
      contact.phone = contact.phone.trim();
    if (contact.street)
      contact.street = contact.street.trim();
    if (contact.city)
      contact.city = contact.city.trim();
    if (contact.zipcode)
      contact.zipcode = contact.zipcode.trim();
    if (contact.notes)
      contact.notes = contact.notes.trim();
    return contact;
  }

  //Searches by ID and updates contact with the new info
  app.put('/contacts/:id', (req, res) => {
    User.findOne({ email: req.user.email}, (err, user) => {
      const contact = user.contacts.id(req.params.id);
      if (err) {
        res.send({'error' : 'An error has occurred'});
      } else {
        contact.set(fix_contact_fields(req.body));
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
        user.contacts.push(fix_contact_fields(req.body));
        var contact = user.contacts[0];

        user.save(err => {
          if (err) res.status(400).send({error: err});
          else res.send(contact)
        });
      }
    });
  });

};
