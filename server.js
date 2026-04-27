const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// fake database (temporary)
let users = [];

// Home
app.get("/", (req, res) => {
  res.send("BDGamez Server Running 🚀");
});

// Games API
app.get("/games", (req, res) => {
  res.json([
    { name: "Free Fire" },
    { name: "PUBG Mobile" },
    { name: "COD Mobile" }
  ]);
});

// Register API
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.json({ message: "Registration successful" });
});

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT);
