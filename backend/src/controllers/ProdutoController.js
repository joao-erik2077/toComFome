const mysql = require('./../database/database');

class ProdutoController {

	getAll(req, res, next) {
		const query = `SELECT * FROM produtos WHERE restaurante_id = ${req.params.id_restaurant}`;

		mysql.exec(query, (err, result) => {
			if (err) {
				res.status(200).send({
					'error': err.code,
					'type': 'mysql'
				});
			} else {
				res.status(200).send({
					result
				});
			}
		});
	}

	getWithId(req, res, next) {
		const query = `SELECT * FROM produtos WHERE id = ${req.params.id} AND restaurante_id = ${req.params.id_restaurant}`;

		mysql.exec(query, (err, result) => {
			if (err) {
				res.status(200).send({
					'error': err.code,
					'type': 'mysql'
				});
			} else {
				res.status(200).send({
					result
				});
			}
		});
	}

	insert(req, res, next) {
		if (req.body.nome === undefined || req.body.preco === undefined) {
			return res.status(200).send({
				'error': 'Missing values',
				'type': 'values'
			});
		}


		const query = `INSERT INTO produtos(nome, preco, restaurante_id) VALUES ('${req.body.nome}', ${req.body.preco}, ${req.params.id_restaurant})`;
	
		mysql.exec(query, (err, result) => {
			if (err) {
				res.status(201).send({
					'error': err.code,
					'type': 'mysql'
				});
			} else {
				res.status(201).send({
					'message': 'Success adding product',
					'values': req.body
				});
			}
		});
	}

}

module.exports = new ProdutoController();