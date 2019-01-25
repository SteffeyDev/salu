const ObjectID = require('mongodb').ObjectID;
const User = require('../../models/User.js');

module.exports = function(app, dbase) {

  //Searches by ID
  app.get('/contacts/:id', (req,res) => {
    User.findOne({ email: req.user.email, 'contacts._id': new ObjectID(req.params.id) }, (err, contact) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(contact);
      }
    });
  });

  //Deletes contacts by ID
  app.delete('/contacts/:id', (req,res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    User.findOne({ email: req.user.email, 'contacts._id' : details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send('Contact ' + id + ' has been removed.');
      }
    });
  });

  //Searches by ID and updates contact with the new info
  app.put('/contacts/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

  User.update({ contacts: req.body }, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  //Inserts new document into collection
  app.post('/Contacts', (req, res) => {
    User.insert({ contacts: req.body }, (err, result) =>{
      if (err) {
        res.send({ 'error' : 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
      }
  });
  });
};
