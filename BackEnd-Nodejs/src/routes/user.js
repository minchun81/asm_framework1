const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// CRUD routes
//create
router.post('/user', userController.createUser);
//list
router.get('/user', userController.listUser);
//id
router.get('/user/:id', userController.detailUser);
//update
router.put('/user/:id', userController.updateUser);
//delete
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
