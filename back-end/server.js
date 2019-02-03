#!/usr/bin/env node

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const JwtStrategy = require('./strategies/jwt.js');
const LocalStrategy = require('./strategies/local.js');
const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(config.jwt.secret));

passport.use('jwt', JwtStrategy);
passport.use('local', LocalStrategy);

app.use(express.static('../front-end/dist'));

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/salu.pro/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/salu.pro/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/salu.pro/chain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

// Starting both http & https servers
const httpServer = http.createServer();
const httpsServer = https.createServer(credentials, app);

// set up a route to redirect http to https
httpServer.get('*', function(req, res) {
  res.redirect('https://salu.pro' + req.url);
})

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  require('./routes')(app, passport);

  httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
  });

  httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });
});
