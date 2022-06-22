const mongoose = require("mongoose");

const { Schema } = mongoose;

const bgSchema = new Schema({
  r: { type: String, required: true, default: "0" },
  g: { type: String, required: true, default: "0" },
  b: { type: String, required: true, default: "0" },
  a: { type: String, required: true, default: "1" },
});

const calaveritaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    content: {
      type: String,
      required: false,
      trim: true,
      default: "Put your content here...",
    },

    background: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "backgrounds",
    },

    bgColor: [bgSchema],
  },
  { timestamps: true }
);

const calaveritasModel = mongoose.model("calaveritas", calaveritaSchema);

module.exports = calaveritasModel;
