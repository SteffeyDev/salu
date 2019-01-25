const ObjectID = require('mongodb').ObjectID;
const User = require('../../models/User.js');
const contactSchema = require('../../schemas/ContactSchema.js');
const email = 'raheim@raheim.com'

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

/*   //Deletes contacts by ID
  app.delete('/contacts/:id', (req,res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    User.findOneAndDelete({ email: req.user.email, 'contacts._id': details }, (err) => {
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

    User.update([{ contacts: {
		  first:   req.body.first,
		  last:    req.body.last,
		  email:   req.body.email
		  phone:   req.body.phone,
		  street:  req.body.street,
		  city:    req.body.city,
		  zipcode: req.body.zipcode,
		  tags:    req.body.tags,
		  notes:   req.body.notes,
		} }], details, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
*/
  //Inserts new document into collection
  app.post('/Contacts', (req, res) => {
    User.findOne({ email: email }, (err, user) => {
		  if (err) {
			  res.send({'error' : 'An error has occurred'});
		  } else {
				const contact = user.contacts.create(req.body);
			  res.send(contact);
		  }
	  });
  }); 
  
};
