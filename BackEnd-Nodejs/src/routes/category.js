const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const multer = require('multer');

// const upload = require('../middleware/multer');
// Cấu hình lưu trữ và tên tệp
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '..', 'assets', 'uploads')); // Sử dụng đường dẫn tuyệt đối để đảm bảo chính xác
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});


// Khởi tạo middleware upload
const upload = multer({ storage: storage });

// CRUD routes
// create
router.post('/category', upload.single('image'), categoryController.create);
// list
router.get('/category', categoryController.list);
// id
router.get('/category/:id', categoryController.detail);
// update
router.put('/category/:id', upload.single('image'), categoryController.update);
// delete
router.delete('/category/:id', categoryController.delete);

module.exports = router;