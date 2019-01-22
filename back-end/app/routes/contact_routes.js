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
		const contact = { 
		first: req.body.first, 
		last: req.body.last,
		phone: req.body.phone,
		email: req.body.email,
		address: req.body.address };
		
		dbase.collection('Contacts').update(details, contact, (err, result) => {
			if (err) {
				res.send({'error': 'An error has occurred'});
			} else {
				res.send(contact);
			}
		});
	});
	
	//Inserts new document into collection
	app.post('/Contacts', (req, res) => {
		const contact = { 
		first: req.body.first, 
		last: req.body.last,
		phone: req.body.phone,
		email: req.body.email,
		address: req.body.address };
		
		dbase.collection('Contacts').insert(contact, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
	
};
