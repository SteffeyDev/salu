var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, dbase) {
  
  //Searches by ID
  app.get('/contacts/:id', (req,res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    dbase.collection('Contacts').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });
  
  //Deletes contacts by ID
  app.delete('/contacts/:id', (req,res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    dbase.collection('Contacts').findOne(details, (err, item) => {
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
      
    dbase.collection('Contacts').update(details, req.body, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  
  //Inserts new document into collection
  app.post('/Contacts', (req, res) => {
    dbase.collection('Contacts').insert(req.body, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
