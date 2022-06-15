const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const backgrounds = require("./routes/backgrounds");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/backgrounds", backgrounds);

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is the calaveritas API" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
