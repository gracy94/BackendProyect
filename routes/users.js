const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const usersController = require('../controllers/usersController');
const emailValidation = require('../middlewares/emailValidation');
const userValidation = require('../middlewares/userValidation');

/* GET users listing. */
router.get('/', usersController.getUsers);

router.get('/find', usersController.getUserByName);

router.get('/:id', usersController.getUserById);

router.post(
  '/registration',
  [
    check("userName")
    .not().isEmpty().withMessage('User name is required'),
    check("password")
    .not().isEmpty().withMessage('Password is required')
    .isLength({min: 6, max: 10}).withMessage('the number of characters is minimum 6 and maximum 10'),
    check("email")
    .not().isEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email must be valid'),
  ],
  userValidation,
  emailValidation,
  usersController.postUser);

module.exports = router;
