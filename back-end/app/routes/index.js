const contactRoutes = require('./contact_routes');
const authRoutes = require('./auth_routes');

module.exports = function(app, db){
  contactRoutes(app, db);
  authRoutes(app, db);
};
