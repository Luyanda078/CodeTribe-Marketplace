// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes
router.get('/', productController.getProducts);
router.post('/', productController.addProduct);

module.exports = router;
