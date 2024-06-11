const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');


// CRUD routes
// create
router.post('/category', categoryController.create);
// list
router.get('/category', categoryController.list);
// id
router.get('/category/:id', categoryController.detail);
// update
router.put('/category/:id', categoryController.update);
// delete
router.delete('/category/:id', categoryController.delete);

module.exports = router;