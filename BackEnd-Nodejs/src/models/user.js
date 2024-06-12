var db = require('../config/db');

module.exports = class User {
    constructor() {}

    // Lấy ra tất cả
    static async getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM user`;
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
    static async getById(id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM user WHERE id = ?`;
            db.query(sql, [id], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Thêm một loại sản phẩm
    static async create(user) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO user SET ?', user, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Cập nhật
    static async update(user, id) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE user SET ? WHERE id = ?', [user, id], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Xoá
    static async delete(id) {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM user WHERE id = ?`;
            db.query(sql, [id], function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
