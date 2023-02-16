const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const petsController = require('../controllers/petsController');

/* GET pets listing. */
router.get('/', petsController.getPets);

/* GET pet by Name */
router.get('/find', petsController.getPetByName);

/* GET pet by Id */
router.get('/:id', petsController.getPetById);

/* Post pet*/
router.post('/registration',
[
    check("petName")
    .not().isEmpty().withMessage('Pet name is required'),
    check("owner")
    .not().isEmpty().withMessage('Owner name is required'),
    check("type")
    .not().isEmpty().withMessage('Type of pet is required'),
    check("age")
    .not().isEmpty().withMessage('Pet age is required')
    .isNumeric().withMessage('Age must be numeric'),
],
petsController.postPet);

/* Update pet */
router.put('/update/:id',
[
    check("petName")
    .not().isEmpty().withMessage('Pet name is required'),
    check("owner")
    .not().isEmpty().withMessage('Owner name is required'),
    check("type")
    .not().isEmpty().withMessage('Type of pet is required'),
    check("age")
    .not().isEmpty().withMessage('Pet age is required')
    .isNumeric().withMessage('Age must be numeric'),
],
petsController.putPet);

/* Delete pet */
router.delete('/delete/:id', petsController.deletePet);

module.exports = router;
