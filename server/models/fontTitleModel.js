const mongoose = require("mongoose");

const { Schema } = mongoose;

const fontTitleSchema = new Schema(
  {
    fontFamily: {
      type: String,
      default: "Lato",
    },

    fontSize: {
      type: Number,
      default: 36,
    },
  },
  { _id: false }
);

const fontTitleModel = mongoose.model("fontTitle", fontTitleSchema);

module.exports = fontTitleModel;
