const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');

/* GET pets listing. */
router.get('/', petsController.getPets);

/* GET pet by Name */
router.get('/find', petsController.getPetByName);

/* GET pet by Id */
router.get('/:id', petsController.getPetById);

/* Post pet*/
router.post('/registration', petsController.postPet);

/* Update pet */
router.put('/update/:id', petsController.putPet);

/* Delete pet */
router.delete('/delete/:id', petsController.deletePet);

module.exports = router;
