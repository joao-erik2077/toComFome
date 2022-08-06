const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const restauranteStorage = require('./../localStorage');

router.use(bodyParser.json());

router.get('/restaurante/:id', (req, res, next) => {
	const data = JSON.parse(restauranteStorage.getItem(req.params.id));


	res.status(200).send({
		'id': data.id,
		'nome': data.nome,
		'telefone': data.telefone
	});
});

router.post('/restaurante', (req, res, next) => {

	const restaurante = {
		'id': restauranteStorage.length,
		'nome': req.body.nome,
		'telefone': req.body.telefone
	};
	console.log(restaurante);
	restauranteStorage.setItem(restauranteStorage.length, JSON.stringify(restaurante));
	res.status(201).send({
		restaurante
	});
});

module.exports = router;