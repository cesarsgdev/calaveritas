const mongoose = require("mongoose");

const { Schema } = mongoose;

const bgSchema = new Schema(
  {
    r: { type: Number, required: true, default: 0 },
    g: { type: Number, required: true, default: 0 },
    b: { type: Number, required: true, default: 0 },
    a: { type: Number, required: true, default: 0.5 },
  },
  { _id: false }
);

const bgColorModel = mongoose.model("bgmodel", bgSchema);

module.exports = bgColorModel;
