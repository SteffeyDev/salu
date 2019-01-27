const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const JwtStrategy = require('./strategies/jwt.js');
const LocalStrategy = require('./strategies/local.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(config.jwt.secret));

passport.use('jwt', JwtStrategy);
passport.use('local', LocalStrategy);

app.use(express.static('../front-end/public'));

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  require('./app/routes')(app, passport);

  app.listen(config.LISTEN_PORT, () => {
    console.log('The API is live on ' + config.LISTEN_PORT);
  });
});
