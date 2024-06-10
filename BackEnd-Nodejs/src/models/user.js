// const connection = require('../config/db');
// const bcrypt = require('bcryptjs');

// class User {
//     constructor(email, password, role) {
//         this.email = email;
//         this.password = password;
//         this.role = role;
//     }

//     static async findByEmail(email) {
//         return new Promise((resolve, reject) => {
//             connection.query('SELECT * FROM user WHERE email = ?', [email], (error, results) => {
//                 if (error) {
//                     return reject(error);
//                 }
//                 resolve(results[0]);
//             });
//         });
//     }

//     async save() {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);

//         return new Promise((resolve, reject) => {
//             connection.query('INSERT INTO user (email, password, role) VALUES (?, ?, ?)', [this.email, this.password, this.role], (error, results) => {
//                 if (error) {
//                     return reject(error);
//                 }
//                 this.id = results.insertId;
//                 resolve(this);
//             });
//         });
//     }

//     async comparePassword(password) {
//         return bcrypt.compare(password, this.password);
//     }
// }

// module.exports = User;