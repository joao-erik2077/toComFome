const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const RestauranteController = require('../controllers/RestauranteController');

router.use(bodyParser.json());

// Get one with id
router.get('/restaurante/:id', RestauranteController.getWithId);

// Get all restaurants
router.get('/restaurante', RestauranteController.getAll);

// Post a new restaurant
router.post('/restaurante', RestauranteController.insert);

// Update restaurant
router.put('/restaurante/:id', RestauranteController.update);

// Delete restaurante
router.delete('/restaurante/:id', RestauranteController.delete);

module.exports = router;