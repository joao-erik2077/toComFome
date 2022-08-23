const mysql = require('./../database/database');

class RestauranteController {
	getWithId(req, res, next) {
		const query = `SELECT * FROM restaurantes WHERE id = ${req.params.id}`;
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

	getAll(req, res, next) {
		const query = 'SELECT * FROM restaurantes';

		mysql.exec(query, (err, values) => {
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
	}

	insert(req, res, next) {
		if (req.body.cnpj === undefined || req.body.nome === undefined || req.body.telefone === undefined) {
			res.status(200).send({
				'error': 'Missing values',
				'type': 'values'
			});
			return;
		}
    
		const query = `INSERT INTO restaurantes(cnpj, nome, telefone) VALUES ('${req.body.cnpj}', '${req.body.nome}', '${req.body.telefone}')`;
		mysql.exec(query, (err, result) => {
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
	}

	update(req, res, next) {
		const query = `UPDATE restaurantes SET cnpj = '${req.body.cnpj}', nome = '${req.body.nome}', telefone = '${req.body.telefone}' WHERE id = ${req.params.id}`;
		mysql.exec(query, (err, values) => {
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
	}

	delete(req, res, next) {
		const query = `DELETE FROM restaurantes WHERE id = ${req.params.id}`;
		mysql.exec(query, (err, values) => {
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
	}
}

module.exports = new RestauranteController();