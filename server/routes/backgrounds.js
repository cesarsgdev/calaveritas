const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const sharp = require("sharp");
const size = require("image-size");

router.post("/", upload.single("background"), async (req, res) => {
  try {
    const image = await sharp(req.file.buffer)
      .resize(1000)
      .webp({ quality: 100, lossless: false })
      .toBuffer();
    const base64image = image.toString("base64");
    res.status(200).json({ success: true, base64: base64image });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});

module.exports = router;
