const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');

/* GET pets listing. */
router.get('/', petsController.getPets);

router.get('/:id', petsController.getPet);

module.exports = router;
