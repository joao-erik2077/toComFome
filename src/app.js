const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const restauranteRouter = require('./routes/restaurante');
const produtoRouter = require('./routes/produto');

app.use(indexRouter);
app.use(restauranteRouter);
app.use(produtoRouter);

app.use(morgan);
app.use(bodyParser.json());

module.exports = app;