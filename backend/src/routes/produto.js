const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ProdutoController = require('../controllers/ProdutoController');

router.use(bodyParser.json());

router.get('/restaurante/:id_restaurant/produtos', ProdutoController.getAll);

router.get('/restaurante/:id_restaurant/produtos/:id', ProdutoController.getWithId);

router.post('/restaurante/:id_restaurant/produtos', ProdutoController.insert);

module.exports = router;