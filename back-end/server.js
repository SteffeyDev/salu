const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mongoose.connect(config.MONGO_URI, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  require('./app/routes')(app, db);

  app.listen(config.LISTEN_PORT, () => {
    console.log('The API is live on ' + config.LISTEN_PORT);
  });
});
