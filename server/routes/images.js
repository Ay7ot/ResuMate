const express = require("express");
const router = express.Router();

const image = require("../controllers/image.controller");

router.post("/upload-image/:objectId", image.create);

router.get('/find-image/:objectId', image.find)

module.exports = router;