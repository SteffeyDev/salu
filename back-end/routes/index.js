const contactRoutes = require('./contact_routes');
const authRoutes = require('./auth_routes');

module.exports = function(app, passport){
  contactRoutes(app, passport);
  authRoutes(app, passport);
};
