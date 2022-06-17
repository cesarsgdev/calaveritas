const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const sharp = require("sharp");
const size = require("image-size");
const Background = require("../models/backgroundsModel");
// Amazon
// const { S3Client } = require("@aws-sdk/client-s3");
require("dotenv").config();
const { S3Client } = require("@aws-sdk/client-s3");
const { PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const path = require("path");
// const multerS3 = require("multer-s3");
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "calaveritas",
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString());
//     },
//   }),
// });

//task-001/1655353321962
router.get("/getUrl", async (req, res) => {
  const params = {
    Bucket: "calaveritas",
    // Key: "task-001/1655353321962",
    Key: "task-002/1655354842244.webp",
  };
  try {
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(s3, command, { expiresIn: 180 });
    console.log(url);
    res.status(200).json({
      success: true,
      message: `This is the endpoint to get all the backgrounds`,
      url: url,
    });
  } catch (e) {
    res.status(400).json({ error: `${e.message}` });
  }
});

router.get("/", async (req, res) => {
  try {
    const backgrounds = await Background.find();
    res.status(200).json({ success: true, data: backgrounds });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

router.post("/", upload.single("background"), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    const image = await sharp(req.file.buffer)
      .resize(1000)
      .webp({ quality: 100, lossless: false })
      .toBuffer();

    const base64image = image.toString("base64");

    const key = `${Date.now().toString()}.webp`;

    const params = {
      Bucket: "calaveritas",
      Key: `backgrounds/${key}`,
      Body: Buffer.from(base64image, "base64"),
      ContentEncoding: "base64",
      ContentType: "image/webp",
    };

    const uploadObject = await s3.send(new PutObjectCommand(params));

    const backgroundItem = {
      name: req.body.name,
      key: key,
    };

    const background = new Background(backgroundItem);
    await background.save();
    res.status(200).json({ success: true, message: `Image uploaded.` });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
});

module.exports = router;
