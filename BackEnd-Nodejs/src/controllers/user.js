const User = require('../models/user');

exports.listUser = async(req, res, next) => {
    try {
        const user = await User.getAll();
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.createUser = async(req, res, next) => {
    try {
        const { userName, password, email, name, role } = req.body;
        const user = { userName, password, email, name, role};
        const result = await User.create(user);
        res.status(201).json({ result, user });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.detailUser = async(req, res, next) => {
    try {
        const id = req.params.id;
        const result = await User.getById(id);
        res.status(200).json({ data: result });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateUser = async(req, res, next) => {
    try {
        const id = req.params.id;
        const { userName, password, email, name, role} = req.body;
        const user = { userName, password, email, name, role};
        const result = await User.update(user, id);
        res.status(200).json({ result, user });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteUser = async(req, res, next) => {
    try {
        const id = req.params.id;
        const result = await User.delete(id);
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).send(error);
    }
};
