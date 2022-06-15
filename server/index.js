const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const backgrounds = require("./routes/backgrounds");
require("dotenv").config();

try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.log(e.message);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/backgrounds", backgrounds);

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is the calaveritas API" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
