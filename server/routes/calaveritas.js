const express = require("express");
const router = express.Router();
const Calaverita = require("../models/calaveritaModel");
const BGColorModel = require("../models/bgColorModel");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const calaveritas = await Calaverita.find({})
      .skip(3)
      .populate("background", "key");
    res.status(200).json({ success: true, data: calaveritas });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const calaverita = await Calaverita.findById(req.params.id).populate(
      "background"
    );

    if (calaverita) {
      res.status(200).json({ success: true, data: calaverita });
    }
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const calaverita = new Calaverita(req.body);
    const bgModel = new BGColorModel();
    calaverita.bgColor = bgModel;
    console.log(calaverita);
    await calaverita.save();
    res.status(200).json(calaverita);
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.body);

  try {
    if (req.body.background) {
      req.body.background = mongoose.Types.ObjectId(req.body.background);
    }
    const filter = { _id: req.params.id };
    const update = req.body;
    const doc = await Calaverita.findOneAndUpdate(filter, update, {
      new: true,
    });
    console.log(doc);
    res.status(200).json({ success: true, data: doc });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

module.exports = router;
