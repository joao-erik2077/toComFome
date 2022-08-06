require('dotenv').config();
const http = require('http');
const app = require('./app');
const database = require('./database');

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);