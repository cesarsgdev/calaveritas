const mongoose = require("mongoose");

const { Schema } = mongoose;

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
  },
  { timestamps: true }
);

const calaveritasModel = mongoose.model("calaveritas", calaveritaSchema);

module.exports = calaveritasModel;
