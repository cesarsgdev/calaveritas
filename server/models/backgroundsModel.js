const mongoose = require("mongoose");
const { Schema } = mongoose;

const backgroundSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const backgroundsModel = mongoose.model("backgrounds", backgroundSchema);

module.exports = backgroundsModel;
