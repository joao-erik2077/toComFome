const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).send({
		'message': 'worked'
	});
});

module.exports = router;