const ObjectID = require('mongodb').ObjectID;
const User = require('../../models/User.js');
const contactSchema = require('../../schemas/ContactSchema.js');
const email = 'peter.steffey@knights.ucf.edu'

module.exports = function(app, dbase) {

  //Searches by ID
  app.get('/contacts/:id', (req,res) => {
    User.findOne({ email: email }, (err, user) => {
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
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(user.contacts);
      }
    });
  });

  //Deletes contacts by ID
  app.delete('/contacts/:id', (req,res) => {
    User.findOne({ email: email }, (err, user) => {
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
    User.findOne({ email: email}, (err, user) => {
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
    User.findOne({ email: email }, (err, user) => {
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
