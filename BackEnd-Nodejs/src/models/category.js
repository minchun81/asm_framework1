var db = require('../config/db');

module.exports = class Category {
    constructor() {}

    // Lấy ra tất cả
    static async getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM category`;
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
    static async getById(idCategory) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM category WHERE idCategory = ?`;
            db.query(sql, [idCategory], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Thêm một loại 
    static async create(category) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO category SET ?', category, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Cập nhật
    static async update(category, idCategory) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE category SET ? WHERE idCategory = ?', [category, idCategory], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Xoá
    static async delete(idCategory) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM category WHERE idCategory = ?`;
            db.query(sql, [idCategory], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}