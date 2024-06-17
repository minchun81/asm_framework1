const Product = require('../models/product');

exports.listProduct = function(req, res, next) {
    Product.getAll()
        .then(function(product) {
            res.status(200).json({ product });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.createProduct = function(req, res, next) {
    const { nameProduct, price, imageProduct, status, description, sortDescription } = req.body;
    const product = { nameProduct, price, imageProduct, status, description, sortDescription };

    Product.create(product)
        .then(function(result) {
            res.status(201).json({ idProduct: result.insertId, ...product });
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.detailProduct = function(req, res, next) {
    const idProduct = req.params.id;

    Product.getById(idProduct)
        .then(function(result) {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.updateProduct = function(req, res, next) {
    const idProduct = req.params.id;
    const { nameProduct, price, imageProduct, status, description, sortDescription } = req.body;
    const product = { nameProduct, price, imageProduct, status, description, sortDescription };

    Product.update(product, idProduct)
        .then(function(result) {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Product not found" });
            } else {
                res.status(200).json({ idProduct, ...product });
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};

exports.deleteProduct = function(req, res, next) {
    const idProduct = req.params.id;

    Product.delete(idProduct)
        .then(function(result) {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Product not found" });
            } else {
                res.status(200).json({ message: "Product deleted" });
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
};