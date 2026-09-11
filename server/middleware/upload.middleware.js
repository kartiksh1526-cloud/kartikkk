const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const env = require('../config/env');
fs.mkdirSync(env.uploadDir, { recursive: true });
const storage = multer.diskStorage({ destination: env.uploadDir, filename: (req, file, callback) => callback(null, `${crypto.randomUUID()}${path.extname(file.originalname).toLowerCase()}`) });
const upload = multer({ storage, limits: { files: 30 }, fileFilter: (req, file, callback) => callback(null, true) });
module.exports = { upload };
