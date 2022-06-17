const express = require("express");
const router = express.Router();
const Calaverita = require("../models/calaveritaModel");

router.get("/", async (req, res) => {
  try {
    const calaveritas = await Calaverita.find({}).populate("background", "key");
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
    res.status(200).json({ success: true, data: calaverita });
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const calaverita = new Calaverita(req.body);
    await calaverita.save();
    res.status(200).json(calaverita);
  } catch (e) {
    res.status(400).json({ success: false, message: `${e.message}` });
  }
});

module.exports = router;