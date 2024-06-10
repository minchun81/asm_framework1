const Category = require('../models/category');
const path = require('path');

exports.list = function(req, res, next) {
    Category.getAll()
        .then(function(category) {
            res.status(200).json({ category });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.create = function(req, res, next) {
    const { nameCategory, status } = req.body;
    const image = req.file ? req.file.path : null;
    const category = { nameCategory, image, status };

    Category.create(category)
        .then(function(result) {
            res.status(201).json({ result, category });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.detail = function(req, res, next) {
    const idCategory = req.params.id;

    Category.getById(idCategory)
        .then(function(result) {
            res.status(200).json({ data: result });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.update = function(req, res, next) {
    const idCategory = req.params.id;
    const { nameCategory, status } = req.body;
    const image = req.file ? req.file.path : req.body.image;
    const category = { nameCategory, image, status };

    Category.update(category, idCategory)
        .then(function(result) {
            res.status(200).json({ result, category });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.delete = function(req, res, next) {
    const idCategory = req.params.id;

    Category.delete(idCategory)
        .then(function(result) {
            res.status(200).json({ result });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};