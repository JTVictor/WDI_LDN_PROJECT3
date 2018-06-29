const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const errorHandler = require('/lib/errorHandler');
const { port, dbGymBuddy } = require('./config/environment');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbGymBuddy);

const routes = require('./config/routes');

app.use(express.static(`${__dirname}/public`));


app.use(bodyParser.json());
app.use('/api', routes);
app.use('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

// app.use(errorHandler);

app.listen(port, () => console.log(`Congratulations you are logged into port ${port}`));

module.exports = app;
