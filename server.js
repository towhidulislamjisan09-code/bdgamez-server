const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("BDGamez Server Running 🚀");
});

app.get("/games", (req, res) => {
  res.json([
    { name: "Free Fire" },
    { name: "PUBG Mobile" },
    { name: "COD Mobile" }
  ]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT);
