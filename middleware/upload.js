const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory if not exist
const uploadPath = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

// Storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

// File filter (accept only PDFs)
function fileFilter(req, file, cb) {
    const allowedTypes = /pdf|jpeg|jpg|png|PNG/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed'));
    }
}

// No size limit (can also omit `limits` entirely if you want no limit)
const upload = multer({ storage, fileFilter });

module.exports = upload;
// This middleware will handle file uploads, ensuring that only PDF files are accepted