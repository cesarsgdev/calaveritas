const mongoose = require("mongoose");
const { Schema } = mongoose;
const { GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client } = require("@aws-sdk/client-s3");
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
  doc.forEach(async (result, i) => {
    try {
      const params = {
        Bucket: "calaveritas",
        Key: `backgrounds/${result.key}`,
      };
      const command = await new GetObjectCommand(params);
      result._doc.url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    } catch (e) {
      console.log(e.message);
    }
  });
});

const backgroundsModel = mongoose.model("backgrounds", backgroundSchema);

module.exports = backgroundsModel;
