const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const con = require('./../database');

router.use(bodyParser.json());

// get one with id
router.get('/restaurante/:id', (req, res, next) => {
	const query = `SELECT * FROM restaurantes WHERE id = ${req.params.id}`;
	con.query(query, (err, values) => {
		if (err) {
			res.status(200).send({
				'error': err.code,
				'type': 'mysql'
			});
		} else {
			res.status(200).send({
				values
			});
		}
	});
});

//get all restaurants
router.get('/restaurante', (req, res, next) => {
	const query = 'SELECT * FROM restaurantes';

	con.query(query, (err, values) => {
		if (err) {
			res.status(200).send({
				'error': err.code,
				'type': 'mysql'
			});
		} else {
			res.status(200).send({
				values
			});
		}
	});
});

// post a new restaurant
router.post('/restaurante', (req, res, next) => {

	if (req.body.cnpj === undefined || req.body.nome === undefined || req.body.telefone === undefined) {
		res.status(200).send({
			'error': 'Missing values',
			'type': 'values'
		});
		return;
	}

	const query = `INSERT INTO restaurantes(cnpj, nome, telefone) VALUES ('${req.body.cnpj}', '${req.body.nome}', '${req.body.telefone}')`;
	con.query(query, (err, result) => {
		if (err) {
			res.status(201).send({
				'error': err.code,
				'type': 'mysql'
			});
		} else {
			res.status(201).send({
				'message': 'Success adding restaurant',
				'values': req.body
			});
		}
	});
});

router.put('/restaurante/:id', (req, res, next) => {
	const query = `UPDATE restaurantes SET cnpj = '${req.body.cnpj}', nome = '${req.body.nome}', telefone = '${req.body.telefone}' WHERE id = ${req.params.id}`;
	con.query(query, (err, values) => {
		if (err) {
			res.status(200).send({
				'error': err.code,
				'type': 'mysql'
			});
		} else {
			res.status(200).send({
				'message': 'Changed values'
			});
		}
	});
});

router.delete('/restaurante/:id', (req, res, next) => {
	const query = `DELETE FROM restaurantes WHERE id = ${req.params.id}`;
	con.query(query, (err, values) => {
		if (err) {
			res.status(200).send({
				'error': err.code,
				'type': 'mysql'
			});
		} else {
			res.status(200).send({
				'message': 'Deleted values'
			});
		}
	});
});

module.exports = router;