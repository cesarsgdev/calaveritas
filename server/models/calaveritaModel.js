const mongoose = require("mongoose");
// const bgSchema = require("./bgColorModel");

const { Schema } = mongoose;

const fontTitleSchema = new Schema(
  {
    family: {
      type: String,
      default: "Lato",
      trim: true,
      required: true,
    },
    size: {
      type: Number,
      default: 36,
      required: true,
    },
  },
  { _id: false }
);

const fontContentSchema = new Schema(
  {
    family: {
      type: String,
      default: "Lato",
      trim: true,
      required: true,
    },
    size: {
      type: Number,
      default: 36,
      required: true,
    },
  },
  { _id: false }
);

const fontsSchema = new Schema(
  {
    title: { type: fontTitleSchema, required: true, default: () => ({}) },
    content: {
      type: fontContentSchema,
      required: true,
      default: () => ({}),
    },
  },
  { _id: false }
);

const sizeSchema = new Schema(
  {
    width: {
      type: Number,
      default: 400,
      required: true,
    },

    height: {
      type: Number,
      default: 650,
      required: true,
    },
  },
  { _id: false }
);

const bgColorSchema = new Schema(
  {
    r: { type: Number, required: true, default: 0 },
    g: { type: Number, required: true, default: 0 },
    b: { type: Number, required: true, default: 0 },
    a: { type: Number, required: true, default: 0.5 },
  },
  { _id: false }
);

const propertiesSchema = new Schema(
  {
    fonts: { type: fontsSchema, required: true, default: () => ({}) },
    size: { type: sizeSchema, required: true, default: () => ({}) },
    bgBlendMode: { type: String, required: true, default: "normal" },
    bgFilter: { type: String, required: true, default: "none" },
    bgColor: { type: bgColorSchema, required: true, default: () => ({}) },
  },
  { _id: false }
);

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

    // properties: bgSchema.schema,

    properties: { type: propertiesSchema, required: true, default: () => ({}) },
  },
  { timestamps: true }
);

const calaveritasModel = mongoose.model("calaveritas", calaveritaSchema);

module.exports = calaveritasModel;
