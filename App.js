const express = require('express');
const Mongoose = require('mongoose');
const Bluebird = require('bluebird');
const config = require('./config/creds');
const { log } = require('./utils/logging');
const { storeConnection } = require('./utils/connection');
const { getContent } = require('./api/controllers/comingSoon');

const app = express();
const port = process.env.PORT || 9000;
const apiPrefix = '/comingSoon/v1';



Mongoose.Promise = Bluebird;
Mongoose.connect(config.connection);
Mongoose.connection.once('open', () => {
    storeConnection(Mongoose.connection, 'wga')
    app.use(log);
    app.get(`${apiPrefix}/content`, log, getContent);
    app.listen(port);
    console.log(`App is listening on ${ port }`);
}).on('error', (err) => {
    console.error.bind(console, 'connection error:', err);
});
