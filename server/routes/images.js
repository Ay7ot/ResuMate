const multer = require("multer");
const express = require("express");
const router = express.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images"); // Specify the directory where images will be saved
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

const image = require("../controllers/image.controller");

router.post("/upload-image/:objectId", upload.single("image"), image.create);

module.exports = router;
