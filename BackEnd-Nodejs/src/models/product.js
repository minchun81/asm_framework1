var db = require('../config/db');

module.exports = class Product {
    constructor() {}

    // Lấy ra tất cả
    static async getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM product`;
            db.query(sql, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Lấy ra 1 loại theo id
    static async getById(idProduct) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM product WHERE idProduct = ?`;
            db.query(sql, [idProduct], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Thêm một loại 
    static async create(product) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO product SET ?', product, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Cập nhật
    static async update(product, idProduct) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE product SET ? WHERE idProduct = ?', [product, idProduct], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Xoá
    static async delete(idProduct) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM product WHERE idProduct = ?`;
            db.query(sql, [idProduct], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}