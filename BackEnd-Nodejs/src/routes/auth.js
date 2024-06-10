// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const User = require('../models/user');
// const auth = require('../middleware/auth');
// const router = express.Router();

// // Register
// router.post('/register', async(req, res) => {
//     const { email, password, role } = req.body;
//     try {
//         const existingUser = await User.findByEmail(email);
//         if (existingUser) {
//             return res.status(400).json({ msg: 'User already exists' });
//         }

//         const user = new User(email, password, role);
//         await user.save();

//         const payload = { user: { id: user.id, role: user.role } };
//         jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
//             if (err) {
//                 console.error('Error signing JWT:', err);
//                 return res.status(500).send('Server error');
//             }
//             console.log('User registered successfully'); // Log báo thành công
//             res.json({ token });
//         });
//     } catch (err) {
//         console.error('Error registering user:', err);
//         res.status(500).send('Server error');
//     }
// });

// // Login
// router.post('/login', async(req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findByEmail(email);
//         if (!user) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ msg: 'Invalid credentials' });
//         }

//         const payload = { user: { id: user.id, role: user.role } };
//         jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' }, (err, token) => {
//             if (err) {
//                 console.error('Error signing JWT:', err);
//                 return res.status(500).send('Server error');
//             }
//             console.log('User logged in successfully'); // Log báo thành công
//             res.json({ token });
//         });
//     } catch (err) {
//         console.error('Error logging in user:', err);
//         res.status(500).send('Server error');
//     }
// });


// // Logout
// router.post('/logout', auth, (req, res) => {
//     res.json({ msg: 'Logged out successfully' });
// });

// // Get user profile
// router.get('/profile', auth, async(req, res) => {
//     try {
//         connection.query('SELECT id, email, , role FROM user WHERE id = ?', [req.user.id], (error, results) => {
//             if (results.length === 0) {
//                 return res.status(404).json({ msg: 'User not found' });
//             }
//             res.json(results[0]);
//         });
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;