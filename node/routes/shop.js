const path = require('path');

const express = require('express');

const productController = require('../controllers/products.js');

const router = express.Router();

router.get('/', productController.getIndex);

router.get('/products', productController.getProducts);

router.get('/cart', productController.getCart);

module.exports = router;
