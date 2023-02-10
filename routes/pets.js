const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');

/* GET pets listing. */
router.get('/', petsController.getPets);

router.get('/find', petsController.getPetByName)

router.get('/:id', petsController.getPetById);

router.post('/registration', petsController.postPet)

module.exports = router;
