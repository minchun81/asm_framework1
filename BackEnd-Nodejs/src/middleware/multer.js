const multer = require('multer');
const path = require('path');

// Cấu hình lưu trữ cho multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './assets/uploads/'); // Thay đổi đường dẫn thư mục lưu trữ theo nhu cầu của bạn
    },
    filename: function(req, file, cb) {
        const unifix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + unifix + file.originalname);
    }
});

// Bộ lọc tệp để kiểm tra loại tệp
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Loại tệp không được phép");
        error.code = "LIMIT_FILE_TYPES";
        return cb(error, false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 500000 } // Giới hạn kích thước tệp 500KB
});

module.exports = upload;