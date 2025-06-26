'use strict';

// 3rd Party Dependencies (modules)
const express = require('express');
const food = require ('./routes/food.js');
const people = require ('./routes/people.model.js');
const clothes = require ('./routes/clothes.js');

// Our own custom modules
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');


const app = express();

// Express Global Middleware
app.use(express.json());

// Our own Global Middleware
app.use(logger);
app.use(food);
app.use(people);
app.use(clothes);

// Our Error Handlers -- need to be the last things defined!
// These use the external modules we required above
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the express app and separate method that can start the server
module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
