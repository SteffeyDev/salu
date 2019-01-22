const contactRoutes = require('./contact_routes');

module.exports = function(app, db){
  contactRoutes(app, db);
  //other routes groups go here in the future
};
