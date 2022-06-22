const mongoose = require("mongoose");

const { Schema } = mongoose;

const bgSchema = new Schema(
  {
    r: { type: String, required: true, default: "0" },
    g: { type: String, required: true, default: "0" },
    b: { type: String, required: true, default: "0" },
    a: { type: String, required: true, default: "1" },
  },
  { _id: false }
);

const bgColorModel = mongoose.model("bgmodel", bgSchema);

module.exports = bgColorModel;
