const express = require("express");
const router = express.Router();
const modeController = require("../controller/multer");
var multer = require('multer')
const upload = multer({ dest: 'uploads/' })



router.post('/profile', upload.single(), modeController.fileupload)
