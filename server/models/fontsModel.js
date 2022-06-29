const mongoose = require("mongoose");
const fontTitle = require("./fontTitleModel");

const { Schema } = mongoose;

const fontsModel = new Schema(
  {
    fontTitle: fontTitle.schema,
  },
  {}
);
