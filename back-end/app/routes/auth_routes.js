const ObjectID = require('mongodb').ObjectID;
const User = require('../../models/User.js');
const contactSchema = require('../../schemas/ContactSchema.js');
const email = 'raheim@raheim.com'

module.exports = function(app, dbase) {

  //Creates User
  app.post('/auth/create', (req,res) => {
    let user = new User({ email: email, password: 'raheim123'});
		user.save(function (err, user) {
			if (err) {
				res.send(err);
			} else {
				res.send('Success!');
			}
		});
  });


};
