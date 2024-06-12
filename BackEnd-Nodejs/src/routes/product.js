const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');


// CRUD routes
// create
router.post('/product', productController.createProduct);
// list
router.get('/product', productController.listProduct);
// id
router.get('/product/:id', productController.detailProduct);
// update
router.put('/product/:id', productController.updateProduct);
// delete
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;