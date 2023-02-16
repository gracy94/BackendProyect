const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

/* GET home page. */
router.get('/productsApi', apiController.getProductsApi);

module.exports = router;
