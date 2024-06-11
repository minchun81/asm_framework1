const Product = require('../models/product');

exports.list = function(req, res, next) {
    Product.getAll()
        .then(function(product) {
            res.status(200).json({ product });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.create = function(req, res, next) {
    const { nameProduct, price, imageProduct, status, description, sortDescription } = req.body;
    const category = { nameCategory, image, status };

    Product.create(category)
        .then(function(result) {
            res.status(201).json({ idCategory: result.insertId, ...category });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.detail = function(req, res, next) {
    const idCategory = req.params.id;

    Category.getById(idCategory)
        .then(function(result) {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Category not found" });
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.update = function(req, res, next) {
    const idCategory = req.params.id;
    const { nameCategory, image, status } = req.body;
    const category = { nameCategory, image, status };

    Category.update(category, idCategory)
        .then(function(result) {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Category not found" });
            } else {
                res.status(200).json({ idCategory, ...category });
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.delete = function(req, res, next) {
    const idCategory = req.params.id;

    Category.delete(idCategory)
        .then(function(result) {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Category not found" });
            } else {
                res.status(200).json({ message: "Category deleted" });
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};