/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const restauranteRouter = require('./routes/restaurante');

app.use(indexRouter);
app.use(restauranteRouter);

app.use(morgan);
app.use(bodyParser.json());

module.exports = app;