require('dotenv').config();
const mysql = require('execsql');

const dbConfig = {
	host: 'localhost',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD
};

mysql.config(dbConfig);
mysql.execFile('./src/database/init.sql', (err, results) => {
	console.log('Successfully started database');
});

module.exports = mysql;