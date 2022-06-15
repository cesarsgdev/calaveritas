const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const sharp = require("sharp");
const size = require("image-size");
const Background = require("../models/backgroundsModel");

router.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: `This is the endpoint to get all the backgrounds`,
  });
});

router.post("/", upload.single("background"), async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.file);

    const image = await sharp(req.file.buffer)
      .resize(1000)
      .webp({ quality: 100, lossless: false })
      .toBuffer();

    const base64image = image.toString("base64");

    const backgroundItem = { name: req.body.name, image: base64image };

    const background = new Background(backgroundItem);
    await background.save();
    res.status(200).json({ success: true, message: `Image uploaded.` });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});

module.exports = router;
