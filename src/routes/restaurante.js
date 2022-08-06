const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const restauranteStorage = require('./../localStorage');

router.use(bodyParser.json());

// get one with id
router.get('/restaurante/:id', (req, res, next) => {
	const data = JSON.parse(restauranteStorage.getItem(req.params.id));

	res.status(200).send(data);
});

//get all restaurants
router.get('/restaurante', (req, res, next) => {
	const data = [];
	for(let i = 0; i < restauranteStorage.length; i++) {
		data.push(JSON.parse(restauranteStorage.getItem(i)));
	}

	res.status(200).send({
		data
	});
});

// post a new restaurant
router.post('/restaurante', (req, res, next) => {

	const restaurante = {
		'id': restauranteStorage.length,
		'nome': req.body.nome,
		'telefone': req.body.telefone
	};
	console.log(req.body);
	restauranteStorage.setItem(restauranteStorage.length, JSON.stringify(restaurante));
	res.status(201).send({
		restaurante
	});
});

module.exports = router;