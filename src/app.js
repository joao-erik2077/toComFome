/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use('/', (req, res, next) => {
	res.status(200).send({
		message: 'Working!'
	});
});

module.exports = app;