const mongoose = require("mongoose");
const { Schema } = mongoose;
const { GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client } = require("@aws-sdk/client-s3");
const getStream = require("get-stream");
require("dotenv").config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

const backgroundSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    key: {
      type: String,
      required: true,
      trim: true,
    },

    // image: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
  },
  { timestamps: true }
);

backgroundSchema.post("find", async function (doc) {
  for (background of doc) {
    try {
      const params = {
        Bucket: "calaveritas",
        Key: `backgrounds/${background.key}`,
      };
      const command = new GetObjectCommand(params);
      const data = await s3.send(command);
      const stream = await getStream(data.Body, { encoding: "base64" });
      // result.url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      background._doc.base64 = stream;
    } catch (e) {
      console.log(e.message);
    }
  }
});

const backgroundsModel = mongoose.model("backgrounds", backgroundSchema);

module.exports = backgroundsModel;
