/* eslint-disable no-undef */
const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
	host: 'localhost',
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD
});

con.connect(err => {
	if (err) console.log(err);
	console.log('Connected to MySQL');

	con.query('CREATE DATABASE tocomfome', (err, result) => {
		if (err == 'ER_DB_CREATE_EXISTS') return;
		console.log('Database created');
	});

	con.query('USE tocomfome');

	const restaurante = 'CREATE TABLE restaurantes (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, cnpj VARCHAR(18) NOT NULL, nome VARCHAR(255) NOT NULL, telefone VARCHAR(13))';
	con.query(restaurante, (err, result) => {
		if (err == 'ER_TABLE_EXISTS_ERROR') return;
		console.log('Table restaurantes created');
	});
});

module.exports = con;